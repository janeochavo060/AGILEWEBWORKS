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
  const [showMenu, setShowMenu] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const screenHeight = window?.screen?.height;
      setShowMenu(
        router.pathname !== "/" || position >= screenHeight || position === 0
      );
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [router]);

  return (
    <div
      className={`py-6 z-[100] w-full transition-all duration-600 ease-in-out ${
        className || ""
      } ${
        showMenu
          ? scrollPosition === 0
            ? "bg-transparent fixed top-0 slideDown"
            : "shadow-lg slideDown bg-white backdrop-blur sticky top-0 "
          : ""
      }`}
    >
      <div
        className={`max-w-screen-xl w-full mx-auto px-2 lg:px-8 xxl:px-0`}
        // className={`xxl:max-w-[1345px] xl:max-w-[1260px] w-full mx-auto px-2 xl:px-0`}
      >
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Halcyon Logo"
              className="mx-1 xl:px-0 px-4"
              width={150}
              height={24}
            />
          </Link>
          <div className="hidden xl:flex md:mx-0 mx-4 flex-no-wrap items-center whitespace-nowrap gap-x-16 gap-y-2">
            {upperHeaderMenu.length > 0 ? (
              upperHeaderMenu.map((nav, i) => {
                let pathname = "/" + router?.query?.id;
                const isActive = pathname === nav?.url;
                return (
                  <Link
                    href={nav?.url || router.pathname}
                    key={i}
                    className={`md:text-base text-sm md:px-0 py-1 slide-line-hover tracking-normal underline-animation  ${
                      isActive
                        ? "text-primary underline-animation-active"
                        : "hover:text-black/75"
                    }`}
                  >
                    {nav.name}
                  </Link>
                );
              })
            ) : (
              <></>
              // <span className="md:text-base text-sm md:px-0 py-1"></span>
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
