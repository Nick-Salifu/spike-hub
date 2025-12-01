import Image from "next/image"

const WhyChooseCard = ({image, title, link}) => {
  return (
    <div>
        <Image src={image} alt="images" width={80} height={80} className="object-contain mx-auto" />
        <h1 className="text-center text-lg my-5 font-semibold text-gray-800">       
            {title}
        </h1>
        <p className="text-gray-600 text-center font-medium text-sm mb-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit sequi Lorem, ipsum dolor.
        </p>
          <p className="text-center text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer">
            {link} &rarr;
        </p>
    </div>
  )
}

export default WhyChooseCard