import Image from "next/image"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

const ReviewCard = ({name, image}) => {
  return (
    <div className="w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div>
           <FaQuoteLeft className="w-14 h-14 absolute top-8 opacity-10" /> 
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            {/* Text Content */}
            <div className="col-span-3 order-2 lg:order-1">
                <p className="mt-8 text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-[1.8rem] md:leading-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempore tenetur beatae incidunt nisi eius numquam, dicta deleniti tempora exercitationem necessitatibus rerum culpa nostrum provident iusto officiis adipisci molestias! Libero.
                </p>
                <div className="flex items-center mt-6">
                    <FaStar className="text-yellow-600 w-6 h-6" />
                    <FaStar className="text-yellow-600 w-6 h-6" />
                    <FaStar className="text-yellow-600 w-6 h-6" />
                    <FaStar className="text-yellow-600 w-6 h-6" />
                    <FaStar className="text-yellow-600 w-6 h-6" />
                </div>
                <h1 className="mt-8 font-semibold text-xl">{name}</h1>
                <p className="mt-2 mb-6 text-lg font-medium text-gray-600">
                    Fullstack Developer
                </p>
            </div>
            {/* Image Content */}
            <div className="col-span-2 mx-auto order-1 lg:order-2">
                <Image 
                    src={image} 
                    alt="images" 
                    width={250} 
                    height={120} 
                    className="rounded-full" 
                />
            </div>
        </div>
    </div>
  )
}

export default ReviewCard