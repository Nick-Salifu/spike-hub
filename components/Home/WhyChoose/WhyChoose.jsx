import WhyChooseCard from "./WhyChooseCard"

const WhyChoose = () => {
  return (
    <div className="py-16">
      <h1 className="mt-6 text-2xl md:text-3xl font-bold capitalize text-center">
        Why choose this application
      </h1>
      <div className="mt-20 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          <div>
            <WhyChooseCard
              image="/images/i1.png"
              title="Create Free Account"
              link="Start Earning"
            />
          </div>
          <div>
              <WhyChooseCard
              image="/images/i2.png"
              title="Monitor User Analytics"
              link="Sign Up Your Account"
            />
          </div>
          <div>
              <WhyChooseCard
              image="/images/i3.png"
              title="Safe & Trusted"
              link="Get The App"
            />
          </div>
          <div>
              <WhyChooseCard
              image="/images/i4.png"
              title="Fast Customer Support"
              link="Learn More"
            />
          </div>
          
      </div>
    </div>
  )
}

export default WhyChoose