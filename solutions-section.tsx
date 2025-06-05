export default function SolutionsSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300">
      <div className="container mx-auto max-w-[1920px]">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight max-w-5xl mx-auto text-[#59585e] dark:text-gray-100 transition-colors duration-300">
            Tailored Solutions for Startups, Investors and Advisors
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Solution 1: For Startups */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-light mb-4 text-[#483312] dark:text-gray-100 transition-colors duration-300">
              For Startups
            </h3>
            <div className="mb-6">
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <img
                  src="/images/startup-entrepreneur.png"
                  alt="Enthusiastic entrepreneur holding a 'Start Up' notebook in a modern office environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4 text-center text-[#483312] dark:text-gray-100 transition-colors duration-300">
              Empower Your Business with Expert Guidance and Strategic Partnerships
            </h4>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Unlock your startup's full potential with Ori—gain instant access to a network of world-class executive
                advisors and fractional leaders, all expertly matched to your needs by our cutting-edge AI.
              </p>
              <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Build a leadership team that inspires investor confidence, accelerates your growth, and turns bold ideas
                into investable businesses.
              </p>
              <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                With Ori, you save time and capital by accessing high-level expertise on flexible terms, leverage
                advanced tools for market analysis and due diligence, and benefit from a secure, founder-focused
                platform designed for the fast-paced GCC landscape.
              </p>
            </div>
          </div>

          {/* Solution 2: For Advisors */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-light mb-4 text-[#483312] dark:text-gray-100 transition-colors duration-300">
              For Advisors
            </h3>
            <div className="mb-6">
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <img
                  src="/images/advisor-professional.png"
                  alt="Confident professional advisor giving thumbs up with laptop nearby"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4 text-center text-[#483312] dark:text-gray-100 transition-colors duration-300">
              Unlock a Wealth of Expertise and Investment Opportunities at Your Fingertips
            </h4>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Unlock a world of high-impact, flexible opportunities with Ori—where seasoned executives gain access to
                the region's most promising startups, matched to ventures that value your expertise.
              </p>
              <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Build a dynamic, wealth-generating portfolio with both cash and equity-based fractional roles, invest in
                high-growth businesses, and amplify your personal brand with thought leadership and visibility tools—all
                while turning your experience into tangible results and new revenue streams.
              </p>
              <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Ori's platform streamlines every step, from secure onboarding with smart-contract NDAs to analytics and
                engagement management, so you can focus on maximising your influence.
              </p>
            </div>
          </div>

          {/* Solution 3: For Investors */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-light mb-4 text-[#483312] dark:text-gray-100 transition-colors duration-300">
              For Investors
            </h3>
            <div className="mb-6">
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <img
                  src="/images/investor-meeting.png"
                  alt="Two business professionals reviewing investment documents together in a modern office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4 text-center text-[#483312] dark:text-gray-100 transition-colors duration-300">
              Transform Your Startup with AI-Powered Insights and Tailored Strategies
            </h4>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Unlock smarter, safer, and more lucrative investments in the GCC startup ecosystem with Ori.
              </p>
              <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Gain exclusive access to a curated pipeline of high-potential startups, each vetted for strong,
                experienced leadership teams that drive real execution—not just ideas. Ori's advanced AI-powered
                analytics and due diligence tools put powerful insights at your fingertips, enabling you to evaluate
                opportunities faster and more thoroughly, with dashboards tracking key metrics, team dynamics, and
                market trends.
              </p>
              <p className="text-lg leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Reduce your investment risk by backing ventures already equipped for success and co-investment
                opportunities alongside top executive advisors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
