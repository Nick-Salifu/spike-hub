"use client"

import { navLinks } from "@/constant/constant"
import Link from "next/link"
import { useEffect, useState } from "react"
import {HiBars3BottomRight} from "react-icons/hi2"

const Nav = ({openNav}) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };
        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, [])

  return (
    <div className={`fixed ${navBg ? 'bg-white shadow-md' : 'fixed'} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
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
                            <p className="text-gray-700 hover:text-green-600">
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
            
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 text-black cursor-pointer lg:hidden" />
        </div>
    </div>
  )
}

export default Nav