"use client"

import { Button } from "@/components/ui/button"
import { useModal } from "./components/modal-provider"

export default function Component() {
  const { openWaitingListModal } = useModal()

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f8f8fb] dark:bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-GrX7vCnCFecIYSREPg2yHuAKNQOqIf.png')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-8 text-[#483312] dark:text-gray-300 transition-colors duration-300">
              Empowering Startups with Executive Expertise
            </h1>

            <div className="space-y-6 mb-12">
              <p className="text-lg lg:text-xl leading-relaxed text-[#483312] dark:text-gray-400 transition-colors duration-300">
                At Ori, we connect visionary startups with seasoned executive advisors, through our innovative
                AI-powered matching system.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-[#483312] dark:text-gray-400 transition-colors duration-300">
                Giving greater confidence to investors, ensuring that every pitch and business plan is backed by the
                guidance and expertise needed to thrive.
              </p>
            </div>

            <Button
              onClick={openWaitingListModal}
              className="px-8 py-6 text-lg font-medium transition-all duration-300 rounded-none text-[#E0DEED] bg-[#bb2649] hover:bg-[#a01e3d] dark:text-[#bb2649] dark:bg-white dark:hover:bg-gray-100"
            >
              Join us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
