"use client";

import { useEffect } from "react";
import Analytics from "./Analytics/Analytics"
import Features from "./Features/Features"
import Hero from "./Hero/Hero"
import Offer from "./Offer/Offer"
import Pricing from "./Pricing/Pricing"
import Reviews from "./Reviews/Reviews"
import WhyChoose from "./WhyChoose/WhyChoose"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      });
    }
    initAOS();
  }, [])

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