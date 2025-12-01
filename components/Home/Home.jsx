import Analytics from "./Analytics/Analytics"
import Hero from "./Hero/Hero"
import WhyChoose from "./WhyChoose/WhyChoose"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhyChoose />
      <Analytics />
    </div>
  )
}

export default Home