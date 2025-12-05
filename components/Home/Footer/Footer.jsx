import Link from "next/link"
import { FaClock, FaDribbble, FaEnvelope, FaFacebook, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
      <div className="bg-white py-10">
          <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div>
                    {/* Logo */}
                    <h1 className="text-xl md:text-2xl font-bold text-orange-500">Spike 
                        <span className="text-3xl text-green-600">Hub</span>
                    </h1>
                    {/* Descriptions */}
                    <p className="mt-4 text-sm font-medium w-[80%] text-gray-600 leading-8">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi harum
                    </p>
                </div>
                {/* About us */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    About Us
                  </h3>
                  <ul className="mt-4 font-semibold text-gray-500 text-sm space-y-4">
                    <li>Support Center</li>
                    <li>Customer Support</li>
                    <li>About Us</li>
                    <li>Copyright</li>
                    <li>Popular Campaign</li>
                  </ul>
                </div>
                {/* Information link */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Our Information
                  </h3>
                  <ul className="mt-4 font-semibold text-gray-500 text-sm space-y-4">
                    <li>Return Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Site Map</li>
                    <li>Store Hours</li>
                  </ul>
                </div>
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Our Information
                  </h3>
                  <ul className="mt-4 font-semibold text-gray-500 text-sm space-y-4">
                    <li className="flex items-center">
                      <FaMapMarkedAlt className="mr-2" />
                      Abuja, Nigeria
                    </li>
                    <li className="flex items-center">
                      <FaPhoneAlt className="mr-2" />
                      +234 6786 6768
                    </li>
                    <li className="flex items-center">
                      <FaClock className="mr-2" />
                      7 days - 8am - 10pm
                    </li>
                    <li className="flex items-center">
                      <FaEnvelope className="mr-2" />
                      info.example@gmail.com
                    </li>
                  </ul>
                </div>
            </div>
            {/* Bottom section */}
            <div className="mt-8 border-t p-8 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
              <p className="text-center md:text-left">
                Copyright &copy; 2025 SpikeHub, All Rights Reserved
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span>Socials :</span>
                <Link href="#" className="text-gray-500">
                  <FaFacebook />
                </Link>
                <Link href="#" className="text-gray-500">
                  <FaTwitter />
                </Link>
                <Link href="#" className="text-gray-500">
                  <FaLinkedin />
                </Link>
                <Link href="#" className="text-gray-500">
                  <FaDribbble />
                </Link>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Footer