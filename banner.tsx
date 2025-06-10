"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import DarkModeToggle from "./components/dark-mode-toggle"

export default function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navigateToAbout = () => {
    window.location.href = "/about"
  }

  const navigateToHome = () => {
    window.location.href = "/"
  }

  return (
    <div className="w-full py-4 px-6 lg:px-8 bg-[#fceed8] dark:bg-[#434247] transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={navigateToHome} className="hover:opacity-80 transition-opacity" aria-label="Go to home">
          <img
            src="/images/ori-logo-light.svg"
            alt="ORI"
            className="h-16 object-contain dark:brightness-0 dark:invert transition-all duration-300"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={navigateToHome}
            className="text-lg font-medium text-[#483312] dark:text-gray-100 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={navigateToAbout}
            className="text-lg font-medium text-[#483312] dark:text-gray-100 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => (window.location.href = "/signup")}
            className="text-lg font-medium text-[#483312] dark:text-gray-100 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
          >
            Sign Up
          </button>
          <DarkModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <DarkModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#483312] dark:text-gray-100 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#fceed8] dark:bg-[#434247] border-t border-gray-200 dark:border-gray-700 md:hidden z-50">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button
                onClick={() => {
                  navigateToHome()
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left text-lg font-medium text-[#483312] dark:text-gray-100 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigateToAbout()
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left text-lg font-medium text-[#483312] dark:text-gray-100 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => {
                  window.location.href = "/signup"
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left text-lg font-medium text-[#483312] dark:text-gray-100 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
