import Image from 'next/image';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import { getData } from '@/lib/data';

const Footer = async ({ domain, socials }) => {
  const c = await getData();
  const date = new Date();

  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright &copy; {date.getFullYear()} <span className="">iContent Framework</span>. All rights reserved.
      </div>
     
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          Made by{' '}
          <a href="https://www.contrib.com/" rel="noopener" target="_blank">
            Contrib.com
          </a>
          <span className=''> , </span>
          <a href="https://vnoc.com/" rel="noopener" target="_blank">
            Vnoc.com
          </a>
        </span>
        <span>·</span>
        <span>
          <a href="https://www.contrib.com/" rel="noopener" target="_blank">
            {domain.charAt(0).toUpperCase() + domain.substring(1)}
          </a>
        </span>
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank">
            Build
          </a>
        </span>
        <span>·</span>
        <span>
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank">
            Invest
          </a>
        </span>
        <span>·</span>
        <span>
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank">
            Manage
          </a>
        </span>
        <span>·</span>
        <span>
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank">
            Monetize 
          </a>
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="mt-5">
          <a href="https://vnoc.com/" target="_blank" rel="noopener" className="relative block w-44">
            <Image src="https://cdn.vnoc.com/logos/logo-vnoc4.png" alt="Powered by VNOC" loading="lazy" width={0} height={0} sizes="125px" className="max-w-full h-auto w-full" />
            <span className="block text-sm text-gray-500 text-center">Powered by</span>
          </a>
          {/* <a href="https://www.contrib.com/" target="_blank" rel="noopener" className="relative block w-44">
            <Image src="https://cdn.vnoc.com/logos/logo-new-contrib-06.png" alt="Powered by Contrib" loading="lazy" width={0} height={0} sizes="125px" className="max-w-full h-auto w-full" />
            <span className="block text-sm text-gray-500 text-center">Powered by</span>
          </a> */}
        </div>
        <div className="inline-flex items-center flex-col pt-8">
          <ul className="mb-0 space-x-1">
            {socials.fb ? (<li className="inline-block">
              <a href={socials.fb} className="inline-block no-underline text-[#3b5998]">
                <FaFacebookSquare className="w-6 h-6" />
              </a>
            </li>) : ""}
            {socials.linkedin ? (<li className="inline-block">
              <a href={socials.linkedin} className="inline-block no-underline text-[#0A66C2]">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </li>) : ""}
            {socials.twitter ? (<li className="inline-block">
              <a href={socials.twitter} className="inline-block no-underline text-[#00acee]">
                <FaTwitterSquare className="w-6 h-6" />
              </a>
            </li>) : ""}
          </ul>
          <span className="text-sm text-gray-500">Follow Us</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
