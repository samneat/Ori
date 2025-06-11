"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import GoogleIcon from "./components/google-icon"
import { createUserWithEmail, signInWithGoogle } from "./lib/firebase-auth"
import { FirebaseError } from "firebase/app"

interface SignUpFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  company: string
  role: string
  userType: "advisor" | "investor" | "startup" | ""
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  confirmPassword?: string
  company?: string
  role?: string
  userType?: string
  submit?: string
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    role: "",
    userType: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required"
    }

    if (!formData.userType) {
      newErrors.userType = "Please select one user type"
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
      const { user, userProfile } = await createUserWithEmail(formData.email, formData.password, {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        role: formData.role,
        userType: formData.userType as "advisor" | "investor" | "startup",
      })

      console.log("User created successfully:", user.uid)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          company: "",
          role: "",
          userType: "",
        })
        setIsSuccess(false)
        window.location.href = "/"
      }, 3000)
    } catch (error) {
      console.error("Registration error:", error)

      let errorMessage = "Failed to create your account. Please try again."

      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "An account with this email already exists."
            break
          case "auth/weak-password":
            errorMessage = "Password is too weak. Please choose a stronger password."
            break
          case "auth/invalid-email":
            errorMessage = "Please enter a valid email address."
            break
          case "auth/operation-not-allowed":
            errorMessage = "Email/password accounts are not enabled. Please contact support."
            break
          default:
            errorMessage = "An error occurred during registration. Please try again."
        }
      }

      setErrors({
        submit: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof SignUpFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleUserTypeChange = (type: "advisor" | "investor" | "startup") => {
    setFormData((prev) => ({
      ...prev,
      userType: type,
    }))
    // Clear error when user makes a selection
    if (errors.userType) {
      setErrors((prev) => ({ ...prev, userType: undefined }))
    }
  }

  const goBack = () => {
    window.location.href = "/"
  }

  const handleGoogleSignUp = async () => {
    try {
      setIsSubmitting(true)
      const { user, userProfile, isNewUser } = await signInWithGoogle()

      console.log("Google sign up successful:", user.uid)

      if (isNewUser) {
        // Redirect to profile completion page or show success
        setIsSuccess(true)
        setTimeout(() => {
          window.location.href = "/"
        }, 2000)
      } else {
        // User already exists, redirect to dashboard
        window.location.href = "/"
      }
    } catch (error) {
      console.error("Google sign up error:", error)

      let errorMessage = "Failed to sign up with Google. Please try again."

      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/popup-closed-by-user":
            errorMessage = "Sign up was cancelled."
            break
          case "auth/popup-blocked":
            errorMessage = "Popup was blocked. Please allow popups and try again."
            break
          default:
            errorMessage = "An error occurred during Google sign up. Please try again."
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

        <div className="max-w-2xl mx-auto">
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
              Join Ori Ventures
            </h1>
            <p className="text-lg text-[#59585e] dark:text-gray-300 transition-colors duration-300">
              Create your account to access our revolutionary platform
            </p>
          </div>

          {/* Success State */}
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-medium text-[#483312] dark:text-gray-100 mb-4">Welcome to Ori Ventures!</h2>
              <p className="text-lg text-[#59585e] dark:text-gray-300">
                Your account has been created successfully. Redirecting you to the platform...
              </p>
            </div>
          ) : (
            /* Sign Up Form */
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
              {/* Google Sign Up Button */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={handleGoogleSignUp}
                  disabled={isSubmitting}
                  className="w-full h-14 flex items-center justify-center gap-3 text-lg font-medium border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <GoogleIcon />
                  Sign up with Google
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-[#59585e] dark:text-gray-300">
                    Or sign up with email
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

                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2"
                    >
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange("firstName")}
                      className={`w-full h-12 px-4 border-2 transition-colors duration-200 ${
                        errors.firstName
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 dark:border-gray-600 focus:border-[#bb2649] dark:focus:border-[#E0DEED]"
                      } dark:bg-gray-700 dark:text-gray-100`}
                      disabled={isSubmitting}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2"
                    >
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange("lastName")}
                      className={`w-full h-12 px-4 border-2 transition-colors duration-200 ${
                        errors.lastName
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 dark:border-gray-600 focus:border-[#bb2649] dark:focus:border-[#E0DEED]"
                      } dark:bg-gray-700 dark:text-gray-100`}
                      disabled={isSubmitting}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2">
                    Email Address *
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
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                </div>

                {/* Password Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2"
                    >
                      Password *
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
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2"
                    >
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleInputChange("confirmPassword")}
                        className={`w-full h-12 px-4 pr-12 border-2 transition-colors duration-200 ${
                          errors.confirmPassword
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 dark:border-gray-600 focus:border-[#bb2649] dark:focus:border-[#E0DEED]"
                        } dark:bg-gray-700 dark:text-gray-100`}
                        disabled={isSubmitting}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                {/* User Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-3">
                    I am interested in Ori as: * (select one)
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        id="advisor"
                        type="radio"
                        name="userType"
                        checked={formData.userType === "advisor"}
                        onChange={() => handleUserTypeChange("advisor")}
                        className="w-4 h-4 text-[#bb2649] bg-gray-100 border-gray-300 rounded focus:ring-[#bb2649] dark:focus:ring-[#E0DEED] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        disabled={isSubmitting}
                      />
                      <label htmlFor="advisor" className="ml-3 text-sm font-medium text-[#483312] dark:text-gray-200">
                        Advisor - Share my expertise with startups
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="investor"
                        type="radio"
                        name="userType"
                        checked={formData.userType === "investor"}
                        onChange={() => handleUserTypeChange("investor")}
                        className="w-4 h-4 text-[#bb2649] bg-gray-100 border-gray-300 rounded focus:ring-[#bb2649] dark:focus:ring-[#E0DEED] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        disabled={isSubmitting}
                      />
                      <label htmlFor="investor" className="ml-3 text-sm font-medium text-[#483312] dark:text-gray-200">
                        Investor - Discover investment opportunities
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="startup"
                        type="radio"
                        name="userType"
                        checked={formData.userType === "startup"}
                        onChange={() => handleUserTypeChange("startup")}
                        className="w-4 h-4 text-[#bb2649] bg-gray-100 border-gray-300 rounded focus:ring-[#bb2649] dark:focus:ring-[#E0DEED] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        disabled={isSubmitting}
                      />
                      <label htmlFor="startup" className="ml-3 text-sm font-medium text-[#483312] dark:text-gray-200">
                        Startup - Access expert guidance and funding
                      </label>
                    </div>
                  </div>
                  {errors.userType && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.userType}</p>}
                </div>

                {/* Company and Role */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2"
                    >
                      Company *
                    </label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange("company")}
                      className={`w-full h-12 px-4 border-2 transition-colors duration-200 ${
                        errors.company
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 dark:border-gray-600 focus:border-[#bb2649] dark:focus:border-[#E0DEED]"
                      } dark:bg-gray-700 dark:text-gray-100`}
                      disabled={isSubmitting}
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2">
                      Role *
                    </label>
                    <Input
                      id="role"
                      type="text"
                      value={formData.role}
                      onChange={handleInputChange("role")}
                      className={`w-full h-12 px-4 border-2 transition-colors duration-200 ${
                        errors.role
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 dark:border-gray-600 focus:border-[#bb2649] dark:focus:border-[#E0DEED]"
                      } dark:bg-gray-700 dark:text-gray-100`}
                      disabled={isSubmitting}
                    />
                    {errors.role && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.role}</p>}
                  </div>
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
                      Creating Account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>

                {/* Sign In Link */}
                <div className="text-center pt-4">
                  <p className="text-[#59585e] dark:text-gray-300">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => (window.location.href = "/signin")}
                      className="text-[#bb2649] dark:text-[#E0DEED] hover:opacity-80 transition-opacity font-medium"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
