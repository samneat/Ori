"use client"

import { ChevronRight } from "lucide-react"
import { useModal } from "./components/modal-provider"

export default function FeaturesSection() {
  const { openWaitingListModal } = useModal()

  return (
    <section className="py-20 px-6 lg:px-8 bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300">
      <div className="container mx-auto max-w-[1920px] max-h-[1080px] overflow-hidden">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight max-w-5xl mx-auto text-[#59585e] dark:text-gray-100 transition-colors duration-300">
            Unlock Your Potential with Ori AI-Powered Matching Technology
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/small-logo-Gq8QJs09roekmVzBpiBEI7SvmlXXe4.svg"
                  alt="ORI Logo"
                  className="w-12 h-12 dark:brightness-0 dark:invert transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-medium mb-6 leading-tight text-[#483312] dark:text-gray-100 transition-colors duration-300">
              Comprehensive Services Tailored for Startups and SMEs in the GCC
            </h3>
            <div className="space-y-4 text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>
                  Connect instantly with top executive advisors, NEDs, and investors to strengthen your leadership team.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>AI-powered matching finds the right experts, mentors, and partners for your stage and sector.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>Affordable access to world-class expertise through flexible fractional advisory services.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>
                  Tap into a vibrant ecosystem: co-founder matching, mentor networks, founder forums, and essential
                  resources.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>
                  Enhance investor confidence with structured advisory boards, due diligence tools, and impact
                  analytics.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/small-logo-Gq8QJs09roekmVzBpiBEI7SvmlXXe4.svg"
                  alt="ORI Logo"
                  className="w-12 h-12 dark:brightness-0 dark:invert transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-medium mb-6 leading-tight text-[#483312] dark:text-gray-100 transition-colors duration-300">
              Expert Guidance Focused on the Unique GCC Market Landscape
            </h3>
            <div className="space-y-4 text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>
                  AI-powered matching considers industry, stage, and crucially, cultural fit, ensuring tailored
                  connections for the unique GCC business environment.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>
                  Provides GCC-specific market analysis, financial health tools, and risk assessment to guide strategy
                  and strengthen investor confidence.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>
                  Offers guidance on regulatory compliance, local business culture, and secure onboarding, all
                  underpinned by the founding team's extensive Middle East experience.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/small-logo-Gq8QJs09roekmVzBpiBEI7SvmlXXe4.svg"
                  alt="ORI Logo"
                  className="w-12 h-12 dark:brightness-0 dark:invert transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-medium mb-6 leading-tight text-[#483312] dark:text-gray-100 transition-colors duration-300">
              Transformative Leadership for Sustainable Growth and Innovation
            </h3>
            <div className="space-y-4 text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>
                  Builds credible leadership teams that inspire investor confidence by demonstrating proven execution
                  capability, dramatically improving funding prospects.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>
                  Enables rapid, sustainable growth through cost-effective, flexible access to high-level expertise,
                  supporting agile business development without high overheads.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <img
                    src="/images/ori-small-logo.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p>
                  Unlocks innovation and scale by providing access to world-class advisory boards, bridging the gap that
                  often constrains the region's startup ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={openWaitingListModal}
            className="inline-flex items-center text-lg font-medium hover:opacity-80 transition-opacity text-[#bb2649] dark:text-[#E0DEED] cursor-pointer"
          >
            Join our exclusive waiting list
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
