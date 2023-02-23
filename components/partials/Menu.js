import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { GlobalContext } from "@/lib/context/GlobalContext";

const Menu = ({ className }) => {
  const { tenantDetails, menus } = useContext(GlobalContext);
  const main = tenantDetails?.data?.main;
  const menuHandler = menus?.parentNodes;
  const router = useRouter();
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
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
      className={`py-4 z-[100] w-full transition-all duration-600 ease-in-out ${
        className || ""
      } ${
        showMenu
          ? scrollPosition === 0
            ? "bg-transparent fixed top-0 slideDown"
            : "shadow-lg shadow-black/15 slideDown bg-white backdrop-blur sticky top-0 "
          : ""
      }`}
    >
      <div
        className={`px-4 lg:px-0 w-full mx-auto ${
          router.pathname !== "/" || scrollPosition !== 0
            ? "max-w-screen-xl"
            : "lg:px-[calc(2rem+5%)]"
        }`}
        // className={`xxl:max-w-[1345px] xl:max-w-[1260px] w-full mx-auto px-2 xl:px-0`}
      >
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <Image
              src={`${main?.logo}`}
              alt="Halcyon Logo"
              className="mx-1 xl:px-0 px-4"
              width={150}
              height={24}
            />
          </Link>
          <div className="hidden xl:flex md:mx-0 mx-4 flex-no-wrap items-center whitespace-nowrap gap-x-16 gap-y-2">
            {menuHandler?.length > 0 ? (
              menuHandler.map((nav, i) => {
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
