"use client"

import { ArrowLeft, User, Mail, Building, Briefcase, Calendar, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "./components/auth-provider"
import { signOutUser } from "./lib/firebase-auth"

export default function ProfileScreen() {
  const { user, userProfile, loading } = useAuth()

  const goBack = () => {
    window.location.href = "/"
  }

  const handleSignOut = async () => {
    try {
      await signOutUser()
      window.location.href = "/"
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const getUserTypeLabel = (userType: string) => {
    switch (userType) {
      case "advisor":
        return "Advisor"
      case "investor":
        return "Investor"
      case "startup":
        return "Startup"
      default:
        return "User"
    }
  }

  const getUserTypeDescription = (userType: string) => {
    switch (userType) {
      case "advisor":
        return "Share my expertise with startups"
      case "investor":
        return "Discover investment opportunities"
      case "startup":
        return "Access expert guidance and funding"
      default:
        return ""
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300 flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#bb2649] border-t-transparent rounded-full animate-spin mr-3"></div>
          <span className="text-[#483312] dark:text-gray-100">Loading profile...</span>
        </div>
      </div>
    )
  }

  if (!user || !userProfile) {
    return (
      <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-[#483312] dark:text-gray-100 mb-4">Access Denied</h1>
          <p className="text-[#59585e] dark:text-gray-300 mb-6">Please sign in to view your profile.</p>
          <Button
            onClick={() => (window.location.href = "/signin")}
            className="px-6 py-3 text-lg font-medium transition-all duration-300 rounded-none text-[#E0DEED] bg-[#bb2649] hover:bg-[#a01e3d] dark:text-[#bb2649] dark:bg-[#E0DEED] dark:hover:bg-[#d0cdd9]"
          >
            Sign In
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300">
      <div className="container mx-auto px-6 py-8">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={goBack}
            className="inline-flex items-center text-[#483312] dark:text-gray-100 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>

          <Button
            onClick={handleSignOut}
            variant="outline"
            className="inline-flex items-center text-[#bb2649] dark:text-[#E0DEED] border-[#bb2649] dark:border-[#E0DEED] hover:bg-[#bb2649] hover:text-[#E0DEED] dark:hover:bg-[#E0DEED] dark:hover:text-[#bb2649] transition-all duration-300"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

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
              My Profile
            </h1>
            <p className="text-lg text-[#59585e] dark:text-gray-300 transition-colors duration-300">
              Your Ori Ventures account information
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
            {/* Profile Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#bb2649] dark:bg-[#E0DEED] rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-[#E0DEED] dark:text-[#bb2649]" />
              </div>
              <h2 className="text-2xl font-medium text-[#483312] dark:text-gray-100 mb-2">
                {userProfile.firstName} {userProfile.lastName}
              </h2>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#bb2649] text-[#E0DEED] dark:bg-[#E0DEED] dark:text-[#bb2649]">
                {getUserTypeLabel(userProfile.userType)}
              </div>
            </div>

            {/* Profile Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#483312] dark:text-gray-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-[#483312] dark:text-gray-200 mb-1">Email Address</h3>
                  <p className="text-[#59585e] dark:text-gray-300">{userProfile.email}</p>
                </div>
              </div>

              {/* User Type */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-[#483312] dark:text-gray-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-[#483312] dark:text-gray-200 mb-1">Account Type</h3>
                  <p className="text-[#59585e] dark:text-gray-300 font-medium">
                    {getUserTypeLabel(userProfile.userType)}
                  </p>
                  <p className="text-sm text-[#59585e] dark:text-gray-400 mt-1">
                    {getUserTypeDescription(userProfile.userType)}
                  </p>
                </div>
              </div>

              {/* Company */}
              {userProfile.company && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-[#483312] dark:text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-[#483312] dark:text-gray-200 mb-1">Company</h3>
                    <p className="text-[#59585e] dark:text-gray-300">{userProfile.company}</p>
                  </div>
                </div>
              )}

              {/* Role */}
              {userProfile.role && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#483312] dark:text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-[#483312] dark:text-gray-200 mb-1">Role</h3>
                    <p className="text-[#59585e] dark:text-gray-300">{userProfile.role}</p>
                  </div>
                </div>
              )}

              {/* Member Since */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#483312] dark:text-gray-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-[#483312] dark:text-gray-200 mb-1">Member Since</h3>
                  <p className="text-[#59585e] dark:text-gray-300">
                    {formatDate(
                      userProfile.createdAt.toDate ? userProfile.createdAt.toDate() : new Date(userProfile.createdAt),
                    )}
                  </p>
                </div>
              </div>

              {/* Last Login */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#483312] dark:text-gray-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-[#483312] dark:text-gray-200 mb-1">Last Login</h3>
                  <p className="text-[#59585e] dark:text-gray-300">
                    {formatDate(
                      userProfile.lastLoginAt.toDate
                        ? userProfile.lastLoginAt.toDate()
                        : new Date(userProfile.lastLoginAt),
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => alert("Edit profile functionality coming soon!")}
                  className="flex-1 h-12 text-lg font-medium transition-all duration-300 rounded-none text-[#E0DEED] bg-[#bb2649] hover:bg-[#a01e3d] dark:text-[#bb2649] dark:bg-[#E0DEED] dark:hover:bg-[#d0cdd9]"
                >
                  Edit Profile
                </Button>
                <Button
                  onClick={() => alert("Account settings coming soon!")}
                  variant="outline"
                  className="flex-1 h-12 text-lg font-medium border-2 border-[#bb2649] dark:border-[#E0DEED] text-[#bb2649] dark:text-[#E0DEED] hover:bg-[#bb2649] hover:text-[#E0DEED] dark:hover:bg-[#E0DEED] dark:hover:text-[#bb2649] transition-all duration-300 rounded-none"
                >
                  Account Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
