import { navLinks } from "@/constant/constant"
import Link from "next/link"
import {CgClose} from "react-icons/cg"

const MobileNav = ({ showNav, closeNav }) => {
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}></div>

      {/* Nav links */}
      <div className={`fixed text-white ${navOpen} flex flex-col justify-center h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10000]`}>
        {navLinks.map((link) =>{
          return (
              <Link href={link.url} key={link.id}>
                  <p className="text-white text-[20px] ml-12 border-b-[1.5px] border-white pb-1 sm:text-[30px] w-fit">
                      {link.label}
                  </p>
              </Link>
          )
        })}
        {/* Close button */}
        <CgClose onClick={closeNav} className="absolute w-6 h-6 sm:w-8 sm:h-8 top-[1.4rem] right-[1.4rem]" />
      </div>
    </div>
  )
}

export default MobileNav