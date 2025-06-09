import { Linkedin, Twitter, Globe } from "lucide-react"

export default function Team() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300">
      <div className="container mx-auto max-w-[1920px]">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-[#59585e] dark:text-gray-100 transition-colors duration-300">
            Founders
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Calvin Lee-Pickett */}
          <div className="text-center lg:text-left">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="w-80 h-80 overflow-hidden rounded-lg">
                <img
                  src="/images/calvin-lee-pickett.png"
                  alt="Calvin Lee-Pickett - Chief Executive"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="mb-6 text-center">
              <h3 className="text-2xl lg:text-3xl font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                Calvin Lee-Pickett
              </h3>
              <p className="text-lg text-[#59585e] dark:text-gray-300 transition-colors duration-300">Chief Exec</p>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                  Founder, Calvin James Recruitment (2018 - Present)
                </h4>
                <p className="text-base leading-relaxed mb-3 text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  Leading Executive Recruitment Specialists in the Middle East
                </p>
                <ul className="space-y-2 text-base text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  <li>• Built a company with 250,000+ followers on LinkedIn</li>
                  <li>• Personal LinkedIn following of 61,000+</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                  Founder, The Calvin James Community (2023 - Present)
                </h4>
                <p className="text-base leading-relaxed mb-3 text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  The UAE's first candidate-focused coaching and networking community
                </p>
                <ul className="space-y-2 text-base text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  <li>• Developed a proven Personal Branding methodology to unlock job opportunities in the UAE</li>
                  <li>
                    • Created an online course that helps professionals worldwide relocate to the UAE-the most in-demand
                    expat destination today
                  </li>
                  <li>
                    • His UAE Job Searcher bi-weekly webinar has had professionals from over 86 countries across 6 out
                    of the 7 continents log in
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-[#59585e] dark:text-gray-300 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#59585e] dark:text-gray-300 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#59585e] dark:text-gray-300 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Raúl Coutinho-Garrido */}
          <div className="text-center lg:text-left">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="w-80 h-80 overflow-hidden rounded-lg">
                <img
                  src="/images/raul-coutinho-garrido.png"
                  alt="Raúl Coutinho-Garrido - Chief Innovation"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="mb-6 text-center">
              <h3 className="text-2xl lg:text-3xl font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                Raúl Coutinho-Garrido
              </h3>
              <p className="text-lg text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Chief Innovation
              </p>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                  Founder - NED, marionete (2014 - Present)
                </h4>
                <p className="text-base leading-relaxed mb-3 text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  UK deep-tech consultancy specialised in financial services for clients across Europe - HSBC, Bank Of
                  England,
                </p>
                <p className="text-base leading-relaxed mb-3 text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  Barclays, Saxo, BGC, Danske, Axa, Maersk Beazley.
                </p>
                <p className="text-base leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  Led frontier tech landscape solutions. With a commitment for disruptive innovation, I have cultivated
                  a culture of creativity and excellence within the organisation, driving transformative projects that
                  leverage cutting-edge technologies to solve complex business challenges.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 text-[#483312] dark:text-gray-100 transition-colors duration-300">
                  Co-Founder, maam.ai (2024 - Present)
                </h4>
                <p className="text-base leading-relaxed text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                  A social network that provides mothers in countries with poor national healthcare services, a suite of
                  AI-powered, specialised counselling bots addressing diverse needs from maternity and infant care to
                  nutrition and stress management, builds meaningful communities both online and offline, and actively
                  promotes connections in physical local spaces.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-[#59585e] dark:text-gray-300 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#59585e] dark:text-gray-300 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#59585e] dark:text-gray-300 hover:text-[#bb2649] dark:hover:text-[#E0DEED] transition-colors duration-300"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
