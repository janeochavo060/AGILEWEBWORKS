import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { GlobalContext } from "@/lib/context/GlobalContext";
import Input from "@/components/forms/Input";
import depedLogo from "@/public/img/deped_logo_white.png";
import usAidLogo from "@/public/img/usaid_logo_white.png";
import rtiLogo from "@/public/img/rti_logo_white.png";
import menus2 from "static-data/menu";

export default function MenuAbc({ className }) {
  const router = useRouter();
  const { tenantDetails, menus } = useContext(GlobalContext);
  const main = tenantDetails?.data?.main;
  const menuHandler = menus?.parentNodes;

  const [scrollPosition, setScrollPosition] = useState(0);
  const [openSearchOrMenu, setOpenSearchOrMenu] = useState(null);
  const [showChildren, setShowChildren] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router]);

  return (
    <div id="menu" className={`${className}`}>
      <div
        className={`w-full mx-auto z-[100]  ${scrollPosition ? "fixed" : ""}`}
      >
        <div
          className={`flex justify-between items-center h-full xl:px-4 bg-[#1e4174] transition duration-150 ease-out md:ease-in  ${
            scrollPosition ? "py-2" : "py-6"
          }`}
        >
          <div className="relative flex justify-center items-center gap-0 sm:gap-4 xl:mx-4 lg:justify-between">
            <Link href="/" className="max-w-[115px] pb-2">
              <Image src={main?.deped_logo} width={400} height={0} alt="DepEd Logo" className="px-2 w-auto" />
            </Link>
            <Link href="/" className="relative max-w-[170px]">
              <Image src={main?.usaid_logo} alt="USAID Logo" width={400} height={0} className="px-2 w-auto" />
            </Link>
            <Link href="/" className="max-w-[110px]">
              <Image src={main?.rti_logo} alt="RTI Logo" width={400} height={0} className="px-2 w-auto" />
            </Link>
          </div>
          <div className="hidden xl:flex xl:mx-4 items-center whitespace-nowrap gap-x-6 text-white">
            {menuHandler.map((menu, i) => (
              <div
                key={i}
                className="relative p-4 flex justify-center cursor-pointer"
                onMouseEnter={() => setShowChildren(menu.id)}
                onMouseLeave={() => setShowChildren(null)}
                onClick={() =>
                  showChildren === menu.id
                    ? setShowChildren(null)
                    : setShowChildren(menu.id)
                }
              >
                {menu?.children?.length ? (
                  <>
                    {menu.label}
                    {showChildren !== menu.id ? (
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
                    {showChildren === menu.id && (
                      <div className="absolute z-10 top-[80%] left-[-5%] bg-[#001B3D] shadow-lg w-auto h-auto">
                        <div className="bg-[#0188C1] h-[5px] w-full"></div>
                        {menu.children.map((menuChildren, i) => (
                          <div
                            key={i}
                            className={`p-4 w-full text-white hover:text-[#016DA0]`}
                          >
                            <Link href={menuChildren.url} key={i}>
                              {menuChildren.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <Link href={menu.url} key={i}>
                      {menu.label}
                    </Link>
                  </>
                )}
              </div>
            ))}
            <button
              onClick={() =>
                setOpenSearchOrMenu(
                  openSearchOrMenu === "search" ? null : "search"
                )
              }
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
            className={`w-full py-2 flex justify-center items-center ${
              openSearchOrMenu === "search" ? "bg-[#BA0C2F]" : "bg-[#072348]"
            }`}
            onClick={() =>
              setOpenSearchOrMenu(
                openSearchOrMenu === "search" ? null : "search"
              )
            }
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

          <div className="px-[1px] bg-[#1e4174]"></div>

          <button
            className={`w-full py-2 flex justify-center items-center ${
              openSearchOrMenu === "menu" ? "bg-[#BA0C2F]" : "bg-[#072348]"
            }`}
            onClick={() =>
              setOpenSearchOrMenu(openSearchOrMenu === "menu" ? null : "menu")
            }
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
        <div
          className={`relative bg-white border-b-[1.5px] border-[#1e4174] transition duration-600 ease-in-out ${
            openSearchOrMenu === "search" ? "h-[100px] block" : "h-0 hidden"
          }`}
        >
          <div className="flex justify-center items-center pt-4">
            <input
              type="text"
              name="search"
              className="text-xs border-[0.5px] rounded-l-lg py-[8.5px] px-4 outline-0"
              placeholder="Enter keywords to search..."
            />
            <button className="text-white bg-[#1e4174] rounded-r-lg py-[5.5px] px-2">
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
            className="bg-[#1e4174] absolute bottom-0 left-0 right-0 ml-auto mr-auto w-[55px] h-[23px] rounded-t-2xl flex items-center justify-center"
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
        <div
          className={`relative bg-white border-b-[1.5px] border-[#1e4174] transition duration-600 ease-in-out ${
            openSearchOrMenu === "menu" ? "h-auto block" : "h-0 hidden"
          }`}
        >
          <div className="flex-col justify-center items-center pb-12">
            {menus2.map((menu, i) => (
              <div key={i}>
                <div
                  className={`px-4 ${
                    showChildren === menu.parent ? "bg-[#E0E9F2]" : ""
                  }`}
                >
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

                {menu.childrens &&
                  showChildren === menu.parent &&
                  menu.childrens.map((menuChildren, i) => (
                    <div key={i} className="py-4 text-center w-full">
                      <Link href={menuChildren.link} key={i}>
                        {menuChildren.label}
                      </Link>
                    </div>
                  ))}
              </div>
            ))}
            <div className="px-4 py-4 text-center w-full border-b-[0.5px] border-[#BFC0C1] flex justify-center font-semibold text-[#07336E]">
              <Link href="/login">Login</Link>
            </div>
            <div className="px-4 py-4 text-center w-full border-b-[0.5px] border-[#BFC0C1] flex justify-center font-semibold text-[#07336E]">
              <Link href="/register">Register</Link>
            </div>
          </div>
          <div
            className="bg-[#1e4174] absolute bottom-0 left-0 right-0 ml-auto mr-auto w-[55px] h-[23px] rounded-t-2xl flex items-center justify-center"
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
      <div className={`${scrollPosition ? "h-[110px] xl:h-[75px]" : ""}`}></div>
    </div>
  );
}
