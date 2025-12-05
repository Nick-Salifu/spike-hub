import Image from "next/image"

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
        <div className="flex flex-col justify-center w-[90%] sm:w-[80%] h-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                {/* Text content */}
                <div>
                    <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md bg-white flex items-center space-x-3">
                        <div className="px-3 py-1 md:px-5 rounded-full bg-blue-700 text-white md:text-base sm:text-sm text-xs">News</div>
                        <p className="text-xs sm:text-sm">We have updated our terms and condition policy</p>
                    </div>
                    
                    <h1 data-aos="fade-up" className="text-2xl sm:text-4xl md:text-[2.60rem] font-bold my-6 md:leading-12 lg:leading-14">The premier workspace companion for your daily needs.</h1>
                    <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore alias doloribus eos, impedit est facere praesentium laborum obcaecati soluta magnam voluptates! Rem, tenetur magni!</p>
                    <div className="flex items-center my-6 space-x-4">
                        <Image src="/images/gp.png" alt="google store" className="object-contain" width={150} height={150} />
                        <Image src="/images/as.png" alt="app store" className="object-contain" width={150} height={150} />
                    </div>
                </div>
                
                {/* Image content */}
                <div data-aos="fade-up" data-aos-delay="200" className="hidden lg:block">
                    <Image src="/images/hero.png" alt="hero image" width={700} height={700} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero