import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { auth, db } from "./firebase"

export interface UserProfile {
  uid: string
  email: string
  firstName: string
  lastName: string
  company?: string
  role?: string
  userType: "advisor" | "investor" | "startup"
  createdAt: Date
  lastLoginAt: Date
}

// Create user with email and password
export const createUserWithEmail = async (
  email: string,
  password: string,
  profile: Omit<UserProfile, "uid" | "createdAt" | "lastLoginAt">,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Create user profile in Firestore
    const userProfile: UserProfile = {
      ...profile,
      uid: user.uid,
      createdAt: new Date(),
      lastLoginAt: new Date(),
    }

    await setDoc(doc(db, "users", user.uid), userProfile)

    return { user, userProfile }
  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
}

// Sign in with email and password
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Update last login time
    await setDoc(
      doc(db, "users", user.uid),
      {
        lastLoginAt: new Date(),
      },
      { merge: true },
    )

    return user
  } catch (error) {
    console.error("Error signing in:", error)
    throw error
  }
}

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    const user = userCredential.user

    // Check if user profile exists
    const userDoc = await getDoc(doc(db, "users", user.uid))

    if (!userDoc.exists()) {
      // Create new user profile for Google sign-in
      const userProfile: UserProfile = {
        uid: user.uid,
        email: user.email || "",
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ").slice(1).join(" ") || "",
        userType: "startup", // Default, can be updated later
        createdAt: new Date(),
        lastLoginAt: new Date(),
      }

      await setDoc(doc(db, "users", user.uid), userProfile)
      return { user, userProfile, isNewUser: true }
    } else {
      // Update last login time for existing user
      await setDoc(
        doc(db, "users", user.uid),
        {
          lastLoginAt: new Date(),
        },
        { merge: true },
      )

      return { user, userProfile: userDoc.data() as UserProfile, isNewUser: false }
    }
  } catch (error) {
    console.error("Error signing in with Google:", error)
    throw error
  }
}

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error("Error signing out:", error)
    throw error
  }
}

// Get user profile
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid))
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile
    }
    return null
  } catch (error) {
    console.error("Error getting user profile:", error)
    throw error
  }
}
