"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import {
  type User,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { auth, googleProvider, db } from "../lib/firebase"

interface AuthContextType {
  user: User | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signUpWithEmail: (email: string, password: string, userData: any) => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user

      // Check if user document exists, if not create it
      const userDocRef = doc(db, "users", user.uid)
      const userDoc = await getDoc(userDocRef)

      if (!userDoc.exists()) {
        // Create user document in Firestore
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
          authProvider: "google",
          userTypes: {
            advisor: false,
            investor: false,
            startup: false,
          },
        })
      }
    } catch (error) {
      console.error("Error signing in with Google:", error)
      throw error
    }
  }

  const signUpWithEmail = async (email: string, password: string, userData: any) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      const user = result.user

      // Update the user's display name
      await updateProfile(user, {
        displayName: `${userData.firstName} ${userData.lastName}`,
      })

      // Create user document in Firestore
      const userDocRef = doc(db, "users", user.uid)
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        displayName: `${userData.firstName} ${userData.lastName}`,
        firstName: userData.firstName,
        lastName: userData.lastName,
        company: userData.company,
        role: userData.role,
        userTypes: userData.userTypes,
        createdAt: new Date().toISOString(),
        authProvider: "email",
      })
    } catch (error) {
      console.error("Error signing up with email:", error)
      throw error
    }
  }

  const signInWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error("Error signing in with email:", error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Error signing out:", error)
      throw error
    }
  }

  const value = {
    user,
    loading,
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
