
import Image from "next/image"
import { FaFacebookSquare,FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright &copy; 2023 <span className="">iContent Framework</span>. All rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          Made by <a href="#" rel="noopener" target="_blank">Contrib.com</a>
        </span>
        <span>·</span>
        <span>
          <a href="#" rel="noopener" target="_blank">Vnoc.com</a>
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="mt-5">
          <a href="#" target="_blank" rel="noopener" className="relative block w-44">
            <Image 
              src="https://cdn.vnoc.com/logos/logo-new-contrib-06.png"
              alt="Powered by Vercel" 
              loading="lazy" 
              width="150" 
              height="25" 
            />
            <span className="block text-sm text-gray-500 text-center">
              Powered by
            </span>
          </a>
        </div>
        <div className="inline-flex items-center flex-col pt-8">
          <ul className="mb-0 space-x-1">
            <li className="inline-block">
              <a href="#" className="inline-block no-underline text-[#3b5998]">
                <FaFacebookSquare className="w-6 h-6"/>
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="inline-block no-underline text-[#0A66C2]">
                <FaLinkedin className="w-6 h-6"/>
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="inline-block no-underline text-[#00acee]">
                <FaTwitterSquare className="w-6 h-6"/>
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500">Follow Us</span>
        </div>
      </div>
    </div>
  )
}

export default Footer