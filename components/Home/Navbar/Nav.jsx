import { navLinks } from "@/constant/constant"
import Link from "next/link"
import {HiBars3BottomRight} from "react-icons/hi2"

const Nav = () => {
  return (
    <div className="w-full transition-all duration-200 h-[12vh] z-[1000]">
        <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
            {/* Logo */}
            <h1 className="text-xl md:text-2xl font-bold text-orange-500">Spike 
                <span className="text-3xl text-green-600">Hub</span>
            </h1>
            
            {/* NavLinks */}
            <div className="hidden lg:flex items-center space-x-10">
                {navLinks.map((link) =>{
                    return (
                        <Link href={link.url} key={link.id}>
                            <p className="hover:border-b-2 hover:text-green-600 border-orange-600 text-gray-700">
                                {link.label}
                            </p>
                        </Link>
                    )
                })}
            </div>
            
            {/* Button and hamburger menu */}
            <div className="flex items-center space-x-4">
                <button className="px-6 py-2 md:px-8 md:py-2.5 rounded-full bg-blue-700 font-semibold text-base hover:bg-blue-900 transition-all duration-300 text-white">Join now</button>
            </div>
            
            <HiBars3BottomRight className="w-8 h-8 text-black cursor-pointer lg:hidden" />
        </div>
    </div>
  )
}

export default Nav