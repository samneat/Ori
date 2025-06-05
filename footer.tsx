export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Logo and Contact Info */}
        <div className="mb-16">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/images/ori-logo-light.svg"
              alt="ORI"
              className="h-16 object-contain dark:brightness-0 dark:invert transition-all duration-300"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Address:
              </h3>
              <p className="text-lg text-[#59585e] dark:text-gray-300 transition-colors duration-300">Dubai - JLT</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 text-[#59585e] dark:text-gray-300 transition-colors duration-300">
                Contact:
              </h3>
              <a
                href="mailto:info@ori.ventures"
                className="text-lg hover:opacity-80 transition-opacity text-[#59585e] dark:text-gray-300"
              >
                info@ori.ventures
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <p className="text-base text-[#59585e] dark:text-gray-300 transition-colors duration-300">
            © 2025 ori ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
