"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ReviewCard from "./ReviewCard"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
}

const Reviews = () => {
  return (
    <div className="py-16 bg-[#fcf6fa]">
        <h1 className="mt-4 text-2xl md:text-3xl font-bold capitalize text-center">
            What clients say about us
        </h1>
        <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
            <Carousel
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={4000}
                infinite
                responsive={responsive}
                showDots
            >
                <ReviewCard name="Jenny Smith" image="/images/c1.png" />
                <ReviewCard name="John Flannagan" image="/images/c2.png" />
                <ReviewCard name="Mary Friday" image="/images/c1.png" />
                <ReviewCard name="Josh Burrows" image="/images/c2.png" />
            </Carousel>
        </div>
    </div>
  )
}

export default Reviews