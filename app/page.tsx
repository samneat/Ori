import HeroSection from "../hero-section"
import Banner from "../banner"
import FeaturesSection from "../features-section"
import SolutionsSection from "../solutions-section"
import ElevateSection from "../elevate-section"
import SignupSection from "../signup-section"
import Footer from "../footer"

export default function Page() {
  return (
    <main>
      <Banner />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <ElevateSection />
      <SignupSection />
      <Footer />
    </main>
  )
}
