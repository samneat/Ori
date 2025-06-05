"use client"

import { ChevronRight } from "lucide-react"
import { useModal } from "./components/modal-provider"

export default function ElevateSection() {
  const { openWaitingListModal } = useModal()

  return (
    <section className="py-20 px-6 lg:px-8 bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300">
      <div className="container mx-auto max-w-[1920px] max-h-[1080px] overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teamwork-2XLVzQCPDhoFg5dq6MjYCaQkBR7p1G.png"
                alt="Two young professionals collaborating at a desk with laptops, surrounded by colorful sticky notes and brainstorming materials on the wall"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <p className="text-lg font-medium text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Elevate
              </p>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 text-[#59585e] dark:text-gray-100 transition-colors duration-300">
              Unlock Your Potential with Ori's Expertise
            </h2>

            <p className="text-lg lg:text-xl leading-relaxed mb-12 text-[#59585e] dark:text-gray-300 transition-colors duration-300">
              Experience unparalleled growth by leveraging our network of seasoned executives and advisors. Ori empowers
              startups to innovate and thrive in a competitive landscape.
            </p>

            {/* Benefits List */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/small-logo-Gq8QJs09roekmVzBpiBEI7SvmlXXe4.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  Foster innovation through expert guidance and support.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/small-logo-Gq8QJs09roekmVzBpiBEI7SvmlXXe4.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  Achieve sustainable growth with tailored strategies and insights.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/small-logo-Gq8QJs09roekmVzBpiBEI7SvmlXXe4.svg"
                    alt="ORI Logo"
                    className="w-full h-full dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  Transformative leadership for your startup's unique challenges.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div>
              <button
                onClick={openWaitingListModal}
                className="inline-flex items-center text-lg font-medium hover:opacity-80 transition-opacity text-[#bb2649] dark:text-[#E0DEED] cursor-pointer"
              >
                Join our exclusive waiting list
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
