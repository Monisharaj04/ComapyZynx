import React from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { assets } from "../assets/assets";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Products", href: "#", current: false, hasDropdown: true }, // Indicates dropdown
  { name: "Resources", href: "#", current: false, hasDropdown: true  },
  { name: "Pricing", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img src={assets.logo_img} alt="Logo" className="h-16  w-16" />
                </div>
                {/* Desktop Navigation */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                  {navigation.map((item) =>
                    item.hasDropdown ? (
                      <Menu as="div" key={item.name} className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="inline-flex justify-center items-center rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:text-gray-950">
                            {item.name}
                            <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" aria-hidden="true" />
                          </Menu.Button>
                        </div>
                        <Menu.Items className="absolute left-0 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Opction 1
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                   Opction 2
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Opction 3
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Menu>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "text-black" : "text-gray-800 hover:text-gray-950",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              </div>
              {/* User Profile */}
              <div className="hidden sm:flex items-center">
  <img className="h-8 w-8 rounded-full" src={assets.user_img} alt="User Profile" />
</div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* Mobile Navigation */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <Disclosure.Button
                    key={item.name}
                    as="div"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name} 
                  </Disclosure.Button>
                ) : (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
