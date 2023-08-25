'use client';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useId } from 'react';

import Logo from '@/components/Logo';

const Navigation = ({ domain, logo }) => {
  
  let id = useId()

  return (
    <Disclosure data-id={id} as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between md:flex-nowrap ">
              <div className="hidden sm:flex sm:space-x-8">
                <div className="hidden sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {/* Note:: Add class "active" for current page */}
                  <a href="/" className="nav-link">
                    Home
                  </a>
                  <a href="/about" className="nav-link">
                    About us
                  </a>
                  <a href="/apps" className="nav-link">
                    Apps
                  </a>
                  <a href="/contact" className="nav-link">
                    Contact us
                  </a>
                </div>
              </div>
              <div className="flex w-full items-center md:w-auto">
                <a href="/" className="inline-flex items-center font-semibold">
                  <Logo domain={domain} logo={logo} />
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="/staffing" className="nav-link">
                  Apply
                </a>
                <a href="/referral" className="nav-link">
                  Refer
                </a>
                <a href="/partner" className="nav-link">
                  Partner
                </a>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */} 
              {/* Note:: Add class "active" for current page */}
              <Disclosure.Button as="a" href="#" className="nav-link-sm ">
                Home
              </Disclosure.Button>
              <Disclosure.Button as="a" href="#" className="nav-link-sm">
                Link
              </Disclosure.Button>
              <Disclosure.Button as="a" href="#" className="nav-link-sm">
                Link
              </Disclosure.Button>
              <Disclosure.Button as="a" href="#" className="nav-link-sm">
                Link
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="space-y-1 pb-3 pt-2">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button as="a" href="#" className="nav-link-sm">
                  Link
                </Disclosure.Button>
                <Disclosure.Button as="a" href="#" className="nav-link-sm">
                  Link
                </Disclosure.Button>
                <Disclosure.Button as="a" href="#" className="nav-link-sm">
                  Link
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
