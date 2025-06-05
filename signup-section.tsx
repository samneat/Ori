"use client"

import { Button } from "@/components/ui/button"
import { useModal } from "./components/modal-provider"

export default function SignupSection() {
  const { openWaitingListModal } = useModal()

  return (
    <section className="py-20 px-6 lg:px-8 bg-[#f8f8fb] dark:bg-[#434247] transition-colors duration-300">
      <div className="container mx-auto max-w-[1920px] max-h-[1080px] overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 text-[#59585e] dark:text-gray-100 transition-colors duration-300">
              Be the First to Experience
            </h2>

            <p className="text-lg lg:text-xl leading-relaxed mb-12 text-[#59585e] dark:text-gray-300 transition-colors duration-300">
              Get exclusive early access, special launch-day perks, and be part of our founding community. Don't miss
              out on the future.
            </p>

            {/* Call to Action Button */}
            <Button
              onClick={openWaitingListModal}
              className="h-14 px-8 text-lg font-medium transition-all duration-300 rounded-none text-[#E0DEED] bg-[#bb2649] hover:bg-[#a01e3d] dark:text-[#bb2649] dark:bg-[#E0DEED] dark:hover:bg-[#d0cdd9]"
            >
              Join Our Waiting List
            </Button>
          </div>

          {/* Right side - Image */}
          <div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/team-meeting-DzIlwUjdF97tPe5QadysTNoPtsciqL.png"
                alt="Smiling professional man in white shirt holding laptop in modern office with team meeting in background"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
