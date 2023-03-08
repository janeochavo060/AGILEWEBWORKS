import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { GlobalContext } from "@/lib/context/GlobalContext";
export default function Menu ({ className }) {
  const router = useRouter();
  const { tenantDetails, menus } = useContext(GlobalContext);
  const main = tenantDetails?.data?.main;
  const menuHandler = menus?.parentNodes;
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    setShowSideMenu(false)
    const handleScroll = () => {
      const position = window.scrollY;
      const screenHeight = window?.screen?.height;
      if (router.pathname !== "/") {
        if (position === 1) setShowMenu(false);
        else setShowMenu(true);
      } else {
        // setShowMenu(
        //   router.pathname !== "/" || position >= screenHeight || position === 0
        // );
        setShowMenu(position >= screenHeight || position === 0);
      }
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [router]);

  return (
    <div
      id="menu"
      className={`${showSideMenu ? 'h-screen md:w-[50%] md:ml-[50%] lg:w-full lg:h-fit lg:ml-0' : ''} bg-white fixed pt-4 pb-3 z-[100] w-full transition-all duration-600 ease-in-out ${
        className || ""
      } ${
        showMenu && scrollPosition === 0 ? `lg:bg-transparent` : "shadow-lg shadow-black/15 bg-white lg:px-8"
        // showMenu ? scrollPosition === 0 ? `lg:bg-transparent fixed top-0 slideDown` : "shadow-lg shadow-black/15 slideDown bg-white top-0 fixed" : ""
          // showMenu
          //   ? scrollPosition === 0
          //     ? `lg:bg-transparent fixed top-0 slideDown`
          //     : "shadow-lg shadow-black/15 slideDown bg-white top-0 fixed"
          //   : ""
      }`}
    >
      <div
        className={`px-10 lg:px-0 w-full mx-auto ${showSideMenu ? '' : 'flex flex-row-reverse justify-between lg:block'}  ${
          router.pathname !== "/" || scrollPosition !== 0
            ? "max-w-screen-xl"
            : "lg:px-[calc(2rem+5%)]"
        }`}
        // className={`xxl:max-w-[1345px] xl:max-w-[1260px] w-full mx-auto px-2 xl:px-0`}
      >


        {/* <div className={`${showSideMenu ? '' : ''} ml-[-80px] absolute w-full text-right lg:hidden`}> */}
        <div className={`${showSideMenu ? '' : ''} text-right lg:hidden`}>
          <button
            aria-label="Toggle Menu"
            className={`mt-1 menuToggle ${showSideMenu && "show"}`}
            onClick={() => setShowSideMenu(!showSideMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`${'flex flex-col justify-between'} lg:flex-row`}>
          <Link href="/" className={`${showSideMenu ? 'place-self-center mt-20 mb-10' : ''} lg:my-0	w-fit`}>
            <Image
              src={main?.logo}
              alt="Halcyon Logo"
              className={`${showSideMenu ? 'w-[200px] text-center	' : 'w-28 lg:w-40'} lg:w-40`}
              width={150}
              height={24}
            />
          </Link>
          <div className={`${showSideMenu ? 'lg:pt-0' : 'hidden lg:pt-1 lg:block'} flex flex-col lg:flex-row items-center lg:gap-0 gap-8 lg:space-x-16 `}>
            {menuHandler?.length > 0 ? (
              menuHandler.map((nav, i) => {
                let pathname = "/" + router?.query?.id;
                const isActive = pathname === nav?.url;
                return (
                  <Link
                    // onClick={() => setShowSideMenu(false)}
                    href={nav?.url || router.pathname}
                    key={i}
                    className={`text-xl md:text-base md:px-0 py-1 slide-line-hover tracking-normal underline-animation  ${
                      isActive
                        ? "text-primary underline-animation-active"
                        : "hover:text-black/75"
                    }`}
                  >
                    {nav.label}
                  </Link>
                );
              })
            ) : (
              <></>
              // <span className="md:text-base text-sm md:px-0 py-1"></span>
            )}
            <button
              aria-label="Get a Quote"
              className="px-4 py-2 black-shadow transition ease-in-out delay-150 bg-primary hover:bg-sky-400 hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full text-white cursor-pointer"
              onClick={() => {}}
            >
              Get A Quote
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};