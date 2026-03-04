import React, { useState } from "react";
import { ImageField } from "@prismicio/client";
import { LinksList } from "@/constants/constants";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

const Navbar = ({ logo }: { logo: ImageField }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="container flex flex-wrap items-center justify-between text-slate-800">
      <PrismicNextImage width={80} height={80} field={logo} quality={100} />
      <div className="lg:hidden">
        <button
          className="relative ml-auto float-right h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={toggleMobileMenu}
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-64 bg-texture bg-[#fff] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="flex flex-row items-center border-b pb-4">
          <PrismicNextImage
            width={80}
            height={80}
            field={logo}
            quality={100}
            className="ml-2"
          />
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-slate-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col h-full gap-4 p-4">
          {LinksList.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-1 text-lg gap-x-2 text-slate-600"
            >
              <Link
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                href={item.path}
                className="flex items-center"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {LinksList.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-1 text-lg text-[#fff] font-bold-slanted"
            >
              <Link href={item.path} className="flex items-center">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // <div className="flex ml-auto">
    //   <NavigationMenu>
    //     <NavigationMenuList>
    //       {LinksList.map((link, i) => {
    //         return (
    //           <div
    //             key={link.id}
    //             className="p-1 m-1 rounded-xl font-bold-slanted flex align-center items-center md:m-2 lg:m-2"
    //           >
    //             <NavigationMenuItem key={i}>
    //               <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
    //               <NavigationMenuContent>
    //                 <NavigationMenuLink>
    //                   {link.sub?.map((item) => {
    //                     let data = "";
    //                     if (item.sub === null) {
    //                       data = "";
    //                     } else {
    //                       data = item.title;
    //                     }
    //                     return data;
    //                   })}
    //                 </NavigationMenuLink>
    //               </NavigationMenuContent>
    //             </NavigationMenuItem>
    //           </div>
    //         );
    //       })}
    //     </NavigationMenuList>
    //   </NavigationMenu>
    // </div>
  );
};

export default Navbar;
