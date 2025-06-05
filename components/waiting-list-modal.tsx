"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import emailjs from "@emailjs/browser"
import { EMAILJS_CONFIG } from "../lib/emailjs-config"

interface WaitingListModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  firstName: string
  lastName: string
  email: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  submit?: string
}

export default function WaitingListModal({ isOpen, onClose }: WaitingListModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({}) // Clear any previous errors

    try {
      // Check if EmailJS is properly configured
      if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
        throw new Error("EmailJS configuration is incomplete")
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        full_name: `${formData.firstName} ${formData.lastName}`,
        to_email: "info@ori.ventures",
        subject: "New Ori Ventures Waiting List Signup",
        message: `New waiting list signup:
      
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Signup Date: ${new Date().toLocaleDateString()}
Signup Time: ${new Date().toLocaleTimeString()}`,
      }

      console.log("Sending email with EmailJS...")
      console.log("Service ID:", EMAILJS_CONFIG.SERVICE_ID)
      console.log("Template ID:", EMAILJS_CONFIG.TEMPLATE_ID)

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      )

      console.log("EmailJS response:", response)

      if (response.status === 200) {
        setIsSuccess(true)

        // Reset form after success
        setTimeout(() => {
          setFormData({ firstName: "", lastName: "", email: "" })
          setIsSuccess(false)
          onClose()
        }, 3000)
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`)
      }
    } catch (error) {
      console.error("EmailJS error:", error)

      let errorMessage = "Failed to submit your information. Please try again."

      if (error instanceof Error) {
        if (error.message.includes("configuration")) {
          errorMessage = "Email service is not properly configured. Please contact support."
        } else if (error.message.includes("network") || error.message.includes("fetch")) {
          errorMessage = "Network error. Please check your connection and try again."
        }
      }

      setErrors({
        submit: `${errorMessage} If the problem persists, contact us directly at info@ori.ventures`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ firstName: "", lastName: "", email: "" })
      setErrors({})
      setIsSuccess(false)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-2xl transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200 disabled:opacity-50"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-4">
              <img
                src="/images/ori-small-logo.svg"
                alt="ORI Logo"
                className="w-12 h-12 mx-auto dark:brightness-0 dark:invert transition-all duration-300"
              />
            </div>
            <h2
              id="modal-title"
              className="text-2xl lg:text-3xl font-light text-[#483312] dark:text-gray-100 transition-colors duration-300"
            >
              Join Our Waiting List
            </h2>
            <p className="mt-2 text-[#59585e] dark:text-gray-300 transition-colors duration-300">
              Be the first to experience Ori's revolutionary platform
            </p>
          </div>

          {/* Success State */}
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#483312] dark:text-gray-100 mb-2">Welcome to Ori!</h3>
              <p className="text-[#59585e] dark:text-gray-300">
                You've been added to our exclusive waiting list. We'll be in touch soon!
              </p>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Submit Error */}
              {errors.submit && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.submit}</p>
                </div>
              )}

              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2">
                  First Name
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
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2">
                  Last Name
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
                  aria-invalid={!!errors.lastName}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                />
                {errors.lastName && (
                  <p id="lastName-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.lastName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#483312] dark:text-gray-200 mb-2">
                  Email
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
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-lg font-medium transition-all duration-300 rounded-none text-[#E0DEED] bg-[#bb2649] hover:bg-[#a01e3d] dark:text-[#bb2649] dark:bg-[#E0DEED] dark:hover:bg-[#d0cdd9] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  "Join Waiting List"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
