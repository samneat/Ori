"use client"

import { useModal } from "./components/modal-provider"
import SignupSection from "./signup-section"
import Team from "./team"

export default function AboutPage() {
  const { openWaitingListModal } = useModal()

  return (
    <main>
      {/* About Ori Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300">
        <div className="container mx-auto max-w-[1920px]">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight max-w-5xl mx-auto text-[#59585e] dark:text-gray-100 transition-colors duration-300">
              Connecting Leaders and Innovators for Sustainable Growth in the UAE
            </h1>
          </div>

          {/* Three Column Content */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Why Ori Was Created */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-light mb-6 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                Why Ori Was Created
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  Ori was born out of a clear gap in the GCC startup ecosystem: while the region is brimming with
                  entrepreneurial energy and innovation, early-stage companies often struggle to access the high-calibre
                  leadership and advisory expertise needed to scale and secure investment. Founders frequently face
                  challenges in building credible teams, structuring effective advisory boards, and connecting with the
                  right investors—barriers that can stall growth and limit the region's potential.
                </p>
                <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  At the same time, many seasoned executives and advisors in the region sought meaningful, flexible
                  opportunities to share their expertise, build portfolios, and engage with dynamic ventures beyond
                  their immediate networks. Investors, too, demanded more robust, data-driven ways to identify and back
                  startups with real execution capability, not just promising ideas.
                </p>
              </div>
            </div>

            {/* How Ori Was Created */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-light mb-6 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                How Ori Was Created
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  Recognising these challenges, Ori's founding team—veterans of executive recruitment and startup growth
                  in the Middle East—set out to build a platform that would bridge these gaps. By leveraging advanced AI
                  technology and deep regional insight, Ori was designed to intelligently match startups with
                  experienced advisors, executive leaders, and investors, all while providing the tools, analytics, and
                  secure infrastructure needed for effective collaboration.
                </p>
                <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  Ori's creation was driven by a commitment to empower the entire ecosystem: enabling startups to build
                  investor-ready teams, giving executives flexible and impactful roles, and providing investors with a
                  higher quality, de-risked deal flow.
                </p>
              </div>
            </div>

            {/* Ori's Aims */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-light mb-6 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                Ori's Aims
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                    Empower Startups:
                  </h3>
                  <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                    Help founders access world-class leadership and advisory talent, accelerating growth and improving
                    their chances of securing investment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                    Unlock Executive Potential:
                  </h3>
                  <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                    Offer seasoned leaders flexible, rewarding opportunities to make an impact, build wealth, and expand
                    their professional portfolios.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                    Enable Smarter Investment:
                  </h3>
                  <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                    Provide investors with curated, data-driven access to well-led startups, backed by robust due
                    diligence and analytics.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                    Strengthen the GCC Ecosystem:
                  </h3>
                  <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                    Foster knowledge transfer, innovation, and sustainable business growth by connecting the right
                    people at the right time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                    Drive Regional and Global Impact:
                  </h3>
                  <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                    Position the GCC as a hub for high-growth, investable startups with the leadership and execution
                    power to scale globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Signup Section */}
      <SignupSection />
    </main>
  )
}
