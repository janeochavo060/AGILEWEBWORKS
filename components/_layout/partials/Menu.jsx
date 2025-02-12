import React, { useState } from "react";
import menuNavbar from "@/lib/preBuildScripts/static/menuNavbar.json";
import logo from "@/lib/preBuildScripts/static/logo.json";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative ">
      {/* Fixed Navbar with Background */}
      <div className="fixed top-0 left-0 w-full h-[91px] px-[30px] md:px-[50px] lg:px-[137px] 2xl:px-[216px] flex items-center justify-between bg-white shadow-md z-50">
        {/* Logo */}
        <div className="lg:w-auto w-full flex justify-between items-center">
          <div className="md:block flex w-[150px] md:w-[150px] lg:w-[150px]">
            <Image
              src={logo?.data?.main?.image}
              width={0}
              height={0}
              alt="logo image"
              className="w-full h-full"
            />
          </div>

          {/* Hamburger Icon (Visible on mobile) */}
          <div
            className="lg:hidden flex items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-[#004E98] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        {/* Navbar Links (Visible on desktop) */}
        <div className="hidden lg:flex font-jomolhari text-[#004E98] ">
          {menuNavbar?.parentNodes?.map((item, index) => (
            <Link
              className=" lg:px-[15px] 2xl:px-[30px]   hover:text-orange-500  transition-all"
              key={index}
              href={item.url}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`lg:hidden bg-gray-400 flex items-center flex-col justify-center 
              fixed top-[91px] left-0 w-full h-full z-50 
              transition-all duration-300 ease-in-out transform 
              ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
      >
        {menuNavbar?.parentNodes?.map((item, index) => (
          <Link
            className="text-white text-2xl py-4 cursor-pointer font-jomolhari hover:text-orange-500 hover:text-3xl transition-all"
            key={index}
            href={item.url}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
