import Analytics from "./Analytics/Analytics"
import Features from "./Features/Features"
import Hero from "./Hero/Hero"
import Offer from "./Offer/Offer"
import Pricing from "./Pricing/Pricing"
import Reviews from "./Reviews/Reviews"
import WhyChoose from "./WhyChoose/WhyChoose"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhyChoose />
      <Analytics />
      <Features />
      <Reviews />
      <Pricing />
      <Offer />
    </div>
  )
}

export default Home