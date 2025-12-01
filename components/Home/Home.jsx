import Analytics from "./Analytics/Analytics"
import Features from "./Features/Features"
import Hero from "./Hero/Hero"
import WhyChoose from "./WhyChoose/WhyChoose"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhyChoose />
      <Analytics />
      <Features />
    </div>
  )
}

export default Home