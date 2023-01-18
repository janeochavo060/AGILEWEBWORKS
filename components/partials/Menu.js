import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Image from 'next/image'
const Menu = ({ className }) => {
  const router = useRouter();
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [upperHeaderMenu, setUpperHeaderMenu] = useState([
    { name: "Websites", url: "/websites" },
    { name: "Apps & Software", url: "/apps-and-software" },
    { name: "Capabilities", url: "/capabilities" },
    { name: "Contact", url: "/contact" },
  ]);
  return (
    <div className={`sticky top-0 py-6 z-50 w-full transition duration-600 ease-in-out bg-transparent backdrop-blur ${className || ""}`}>
      <div
        className={`xxl:max-w-[1345px] xl:max-w-[1260px] w-full mx-auto px-2 xl:px-0`}
      >
        <div className="flex justify-between items-center h-full">
          <Image
            src="/images/logo.png"
            alt="Halcyon Logo"
            className="mx-1 xl:px-0 px-4"
            width={200}
            height={24}
            onClick={() => router.push(`/`)}
          />
          <div className="hidden xl:flex md:mx-0 mx-4 flex-no-wrap items-center whitespace-nowrap gap-x-16 gap-y-2">
            {upperHeaderMenu.length > 0 ? (
              upperHeaderMenu.map((nav, i) => (
                <Link
                  href={nav.url ? nav.url : router.pathname}
                  as={nav.url ? nav.url : router.pathname}
                  key={i}
                  className={`md:text-base text-sm md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal ${
                    router.pathname.includes(nav.url) && router.pathname !== "/"
                      ? "underline underline-offset-4"
                      : ""
                  }`}
                >
                  {nav.name}
                </Link>
              ))
            ) : (
              <span className="border-b-4 border-transparent ">Loading</span>
            )}
            <button
              aria-label="Get a Quote"
              className="px-4 py-2 transition ease-in-out delay-150 bg-sky-400 hover:bg-blue-500 hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full text-white cursor-pointer"
              onClick={() => {}}
            >
              Get A Quote
            </button>
          </div>
          <button
            aria-label="Toggle Menu"
            className={`xl:hidden mx-6 menuToggle ${showSideMenu && "show"}`}
            onClick={() => setShowSideMenu(!showSideMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
