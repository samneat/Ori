"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import GoogleIcon from "./components/google-icon"
import { signInWithEmail, signInWithGoogle } from "./lib/firebase-auth"
import { FirebaseError } from "firebase/app"

interface SignInFormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
  submit?: string
}

export default function SignInForm() {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({})

    try {
      const user = await signInWithEmail(formData.email, formData.password)
      console.log("Sign in successful:", user.uid)

      // Redirect to dashboard or home page
      window.location.href = "/"
    } catch (error) {
      console.error("Sign in error:", error)

      let errorMessage = "Invalid email or password. Please try again."

      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/user-not-found":
            errorMessage = "No account found with this email address."
            break
          case "auth/wrong-password":
            errorMessage = "Incorrect password. Please try again."
            break
          case "auth/invalid-email":
            errorMessage = "Please enter a valid email address."
            break
          case "auth/user-disabled":
            errorMessage = "This account has been disabled. Please contact support."
            break
          case "auth/too-many-requests":
            errorMessage = "Too many failed attempts. Please try again later."
            break
          default:
            errorMessage = "An error occurred during sign in. Please try again."
        }
      }

      setErrors({
        submit: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof SignInFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
    // Clear submit error when user makes changes
    if (errors.submit) {
      setErrors((prev) => ({ ...prev, submit: undefined }))
    }
  }

  const goBack = () => {
    window.location.href = "/"
  }

  const handleForgotPassword = () => {
    // For now, just show an alert
    // In a real app, you would navigate to a forgot password page
    alert("Forgot password functionality will be implemented soon. Please contact info@ori.ventures for assistance.")
  }

  const handleGoogleSignIn = async () => {
    try {
      setIsSubmitting(true)
      const { user, userProfile, isNewUser } = await signInWithGoogle()

      console.log("Google sign in successful:", user.uid)

      // Redirect to dashboard or home page
      window.location.href = "/"
    } catch (error) {
      console.error("Google sign in error:", error)

      let errorMessage = "Failed to sign in with Google. Please try again."

      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/popup-closed-by-user":
            errorMessage = "Sign in was cancelled."
            break
          case "auth/popup-blocked":
            errorMessage = "Popup was blocked. Please allow popups and try again."
            break
          case "auth/account-exists-with-different-credential":
            errorMessage = "An account already exists with this email using a different sign-in method."
            break
          default:
            errorMessage = "An error occurred during Google sign in. Please try again."
        }
      }

      setErrors({ submit: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="inline-flex items-center text-[#483312] dark:text-gray-100 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <img
                src="/images/ori-logo-light.svg"
                alt="ORI Logo"
                className="h-16 mx-auto dark:brightness-0 dark:invert transition-all duration-300"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-[#483312] dark:text-gray-100 transition-colors duration-300 mb-4">
              Welcome Back
            </h1>
            <p className="text-lg text-[#59585e] dark:text-gray-300 transition-colors duration-300">
              Sign in to your Ori Ventures account
            </p>
          </div>

          {/* Sign In Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
            {/* Google Sign In Button */}
            <div className="mb-6">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isSubmitting}
                className="w-full h-14 flex items-center justify-center gap-3 text-lg font-medium border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <GoogleIcon />
                Sign in with Google
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-[#59585e] dark:text-gray-300">
                  Or sign in with email
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Submit Error */}
              {errors.submit && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.submit}</p>
                </div>
              )}

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  className={`w-full h-12 px-4 border-2 transition-colors duration-200 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:border-[#bb2649] dark:focus:border-[#E0DEED]"
                  } dark:bg-gray-700 dark:text-gray-100`}
                  disabled={isSubmitting}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange("password")}
                    className={`w-full h-12 px-4 pr-12 border-2 transition-colors duration-200 ${
                      errors.password
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-600 focus:border-[#bb2649] dark:focus:border-[#E0DEED]"
                    } dark:bg-gray-700 dark:text-gray-100`}
                    disabled={isSubmitting}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>}
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-[#bb2649] dark:text-[#E0DEED] hover:opacity-80 transition-opacity"
                >
                  Forgot your password?
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-medium transition-all duration-300 rounded-none text-[#E0DEED] bg-[#bb2649] hover:bg-[#a01e3d] dark:text-[#bb2649] dark:bg-[#E0DEED] dark:hover:bg-[#d0cdd9] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin mr-3"></div>
                    Signing In...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-[#59585e] dark:text-gray-300">
                    Don't have an account?
                  </span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => (window.location.href = "/signup")}
                  className="w-full h-12 text-lg font-medium border-2 border-[#bb2649] dark:border-[#E0DEED] text-[#bb2649] dark:text-[#E0DEED] hover:bg-[#bb2649] hover:text-[#E0DEED] dark:hover:bg-[#E0DEED] dark:hover:text-[#bb2649] transition-all duration-300 rounded-none"
                >
                  Create New Account
                </button>
              </div>
            </form>
          </div>

          {/* Additional Help */}
          <div className="text-center mt-8">
            <p className="text-sm text-[#59585e] dark:text-gray-300">
              Need help?{" "}
              <a
                href="mailto:info@ori.ventures"
                className="text-[#bb2649] dark:text-[#E0DEED] hover:opacity-80 transition-opacity"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
