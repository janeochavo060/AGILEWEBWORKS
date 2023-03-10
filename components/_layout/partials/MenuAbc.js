import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { GlobalContext } from "@/lib/context/GlobalContext";
import Input from "@/components/forms/Input";
import depedLogo from "@/public/img/deped_logo_white.png";
import usAidLogo from "@/public/img/usaid_logo_white.png";
import rtiLogo from "@/public/img/rti_logo_white.png";
import menus2 from 'static-data/menu';

export default function MenuAbc ({ className }) {
  const router = useRouter();
  const { tenantDetails, menus } = useContext(GlobalContext);
  const main = tenantDetails?.data?.main;
  const menuHandler = menus?.parentNodes;
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openSearchOrMenu, setOpenSearchOrMenu] = useState(null);
  const [showChildren, setShowChildren] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => {
    //   const position = window.scrollY;
    //   const screenHeight = window?.screen?.height;
    //   if (router.pathname !== "/") {
    //     if (position === 1) setShowMenu(false);
    //     else setShowMenu(true);
    //   } else {
    //     // setShowMenu(
    //     //   router.pathname !== "/" || position >= screenHeight || position === 0
    //     // );
    //     setShowMenu(position >= screenHeight || position === 0);
    //   }
    //   setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [router]);

  return (
    <div
      id="menu"
      className={`z-[100] w-full transition-all duration-600 ease-in-out ${
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
        className={`lg:px-0 w-full mx-auto ${
          router.pathname !== "/" || scrollPosition !== 0
            // ? "max-w-screen-xl"
            // : "lg:px-[calc(2rem+5%)]"
            ? ""
            : ""
        }`}
        // className={`xxl:max-w-[1345px] xl:max-w-[1260px] w-full mx-auto px-2 xl:px-0`}
      >
        <div className="flex justify-between items-center h-full py-4 xl:px-4 bg-[#04316C]">
          <div className="flex justify-center items-center w-full xl:mx-4 xl:justify-between xl:w-auto">
            <Link href="/" className="">
              <div className="relative w-[120px] h-[40px] sm:w-[140px] sm:h-[50px]">
                <Image
                  src={depedLogo}
                  alt="DepEd Logo"
                  className="px-2"
                  fill
                  style={{
                      objectFit: "contain",
                      objectPosition: "center",
                  }}
                />
              </div>
            </Link>
            <Link href="/" className=" ">
              <div className="relative w-[140px] h-[40px] sm:w-[180px] sm:h-[80px]">
                <Image
                  src={usAidLogo}
                  alt="USAID Logo"
                  className="px-2"
                  fill
                  style={{
                      objectFit: "contain",
                      objectPosition: "center",
                  }}
                />
              </div>
            </Link>
            <Link href="/" className="">
              <div className="relative w-[110px] h-[30px] sm:w-[130px] sm:h-[40px]">
                <Image
                  src={rtiLogo}
                  alt="RTI Logo"
                  className="px-2"
                  fill
                  style={{
                      objectFit: "contain",
                      objectPosition: "center",
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="hidden xl:flex xl:mx-4 items-center whitespace-nowrap gap-x-6 text-white">
            {menus2.map((menu, i) => (
              <div
                key={i}
                className="relative p-4 flex justify-center cursor-pointer"
                onMouseEnter={() => setShowChildren(menu.parent)}
                onMouseLeave={() => setShowChildren(null)}
                onClick={() => showChildren === menu.parent ? setShowChildren(null) : setShowChildren(menu.parent)}
              >
                {menu.parent}

                {showChildren !== menu.parent ? (
                  <Image
                    src="/svg/arrow_drop_down_white.svg"
                    alt="show menu"
                    width={25}
                    height={25}
                  />
                ) : (
                  <Image
                    src="/svg/arrow_drop_up_white.svg"
                    alt="close menu"
                    width={25}
                    height={25}
                  />
                )}

                {showChildren === menu.parent && (
                  <div className="absolute top-[80%] left-[-5%] bg-[#001B3D] shadow-lg w-auto h-auto">
                    <div className="bg-[#0188C1] h-[5px] w-full"></div>
                    {menu.childrens.map((menuChildren, i) =>
                      <div key={i} className={`p-4 w-full text-white hover:text-[#016DA0]`}>
                        <Link href={menuChildren.link} key={i} >
                          {menuChildren.label}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link href="/register" className="p-4">Register</Link>
            <Link href="/login" className="p-4">Log in</Link>
            <button
                onClick={() => setOpenSearchOrMenu(openSearchOrMenu === "search" ? null : "search")}
            >
                <Image
                    src="/svg/search_white.svg"
                    alt="open search"
                    className="mx-1"
                    width={23}
                    height={23}
                />
            </button>
          </div>
        </div>
        <div className="xl:hidden flex justify-between text-white">
          <button
            className={`w-full py-2 flex justify-center items-center ${openSearchOrMenu === "search" ? 'bg-[#BA0C2F]' : 'bg-[#072348]'}`}
            onClick={() => setOpenSearchOrMenu(openSearchOrMenu === "search" ? null : "search")}
          >
            <Image
              src="/svg/search_white.svg"
              alt="open search"
              className="mx-1"
              width={23}
              height={23}
            />
            SEARCH
          </button>

          <div className="px-[1px] bg-[#04316C]"></div>

          <button
            className={`w-full py-2 flex justify-center items-center ${openSearchOrMenu === "menu" ? 'bg-[#BA0C2F]' : 'bg-[#072348]'}`}
            onClick={() => setOpenSearchOrMenu(openSearchOrMenu === "menu" ? null : "menu")}
          >
            <Image
              src="/svg/menu_white.svg"
              alt="open menu"
              className="mx-1"
              width={23}
              height={23}
            />
            MENU
          </button>
        </div>

        {/* Search */}
        <div className={`relative bg-white border-b-[1.5px] border-[#04316C] transition duration-600 ease-in-out ${openSearchOrMenu === "search" ? 'h-[100px] visible' : 'h-0 invisible'}`}>
          <div className="flex justify-center items-center pt-4">
            <input
              type="text"
              name="search"
              className="text-xs border-[0.5px] rounded-l-lg py-[8.5px] px-4 outline-0"
              placeholder="Enter keywords to search..."
            />
            <button className="text-white bg-[#04316C] rounded-r-lg py-[5.5px] px-2">
              <Image
                src="/svg/subdirectory_arrow_left_white.svg"
                alt="search icon"
                className="mx-1"
                width={25}
                height={25}
              />
            </button>
          </div>
          <div
            className="bg-[#04316C] absolute bottom-0 left-0 right-0 ml-auto mr-auto w-[55px] h-[23px] rounded-t-2xl flex items-center justify-center"
            onClick={() => setOpenSearchOrMenu(null)}
          >
            <Image
              src="/svg/double_arrow_up_white.svg"
              alt="close search"
              className="mx-1"
              width={25}
              height={25}
            />
          </div>
        </div>

        {/* Menu */}
        <div className={`relative bg-white border-b-[1.5px] border-[#04316C] transition duration-600 ease-in-out ${openSearchOrMenu === "menu" ? 'h-auto visible' : 'h-0 invisible'}`}>
          <div className="flex-col justify-center items-center pb-12">
            {menus2.map((menu, i) => (
              <div key={i}>
                <div className={`px-4 ${showChildren === menu.parent ? 'bg-[#E0E9F2]' : ''}`}>
                  <div className="py-4 text-center w-full border-b-[0.5px] border-[#BFC0C1] flex justify-center">
                    <div className="font-semibold text-[#07336E]">
                      {menu.parent}
                    </div>
                    {menu.childrens && showChildren !== menu.parent && (
                      <button onClick={() => setShowChildren(menu.parent)}>
                        <Image
                          src="/svg/arrow_drop_down_black.svg"
                          alt="show menu"
                          width={25}
                          height={25}
                        />
                      </button>
                    )}

                    {menu.childrens && showChildren === menu.parent && (
                      <button onClick={() => setShowChildren(null)}>
                        <Image
                          src="/svg/arrow_drop_up_black.svg"
                          alt="close menu"
                          width={25}
                          height={25}
                        />
                      </button>
                    )}
                  </div>
                </div>

                {menu.childrens && showChildren === menu.parent && menu.childrens.map((menuChildren, i) =>
                  <div key={i} className="py-4 text-center w-full">
                    <Link href={menuChildren.link} key={i} >
                      {menuChildren.label}
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 py-4 text-center w-full border-b-[0.5px] border-[#BFC0C1] flex justify-center font-semibold text-[#07336E]">
              <Link href="/login">
                Login
              </Link>
            </div>
            <div className="px-4 py-4 text-center w-full border-b-[0.5px] border-[#BFC0C1] flex justify-center font-semibold text-[#07336E]">
              <Link href="/register">
                Register
              </Link>
            </div>
          </div>
          <div
            className="bg-[#04316C] absolute bottom-0 left-0 right-0 ml-auto mr-auto w-[55px] h-[23px] rounded-t-2xl flex items-center justify-center"
            onClick={() => setOpenSearchOrMenu(null)}
          >
            <Image
              src="/svg/double_arrow_up_white.svg"
              alt="close menu"
              className="mx-1"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};