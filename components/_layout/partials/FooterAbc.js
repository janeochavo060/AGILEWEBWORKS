import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCurrentYear } from "@/lib/services/globalService";
import { GlobalContext } from "@/lib/context/GlobalContext";
import TwitterIcon from "@/components/svg/TwitterIcon";
import FbIcon from "@/components/svg/FbIcon";
import LinkedInIcon from "@/components/svg/LinkedInIcon";
import GetInTouch from "@/components/partials/GetInTouch";
export default function FooterAbc() {
  const { tenantDetails, menus } = useContext(GlobalContext);
  const global = tenantDetails?.data?.main;
  const footer = tenantDetails?.data?.footer;
  const menuHandler = menus?.parentNodes;
  return (
    <div className="relative overflow-hidden px-4 pb-4 pt-8 w-full xl:flex xl:justify-center">
      <Image
        alt="ABC+"
        src={footer?.background_image}
        fill
        priority
        className="max-w-fit !w-auto md:max-w-full md:!w-full"
      />
      <div className="relative z-10 xl:w-[1345px] bg-white rounded-lg shadow-xl mb-8 py-12 px-4 md:px-8">
        <div className="grid grid-cols-2 xl:grid-cols-6 gap-6 mb-4 xl:mb-8">
          {menuHandler
            .filter((e) => e.children.length)
            .map((menu) => (
              <div key={menu.parent} className="">
                <div className="font-extrabold text-[#07336E] text-lg xl:text-1xl flex items-center mb-1">
                  <div className="bg-[#E11C38] w-[8px] h-[15px] mr-2"></div>
                  {menu?.label?.toUpperCase()}
                </div>
                {menu.children.map((menuChildren, i) => (
                  <Link href={menuChildren?.url} key={i}>
                    <div className="text-[12px] lg:text-[13px] text-[#656565] py-[3px] w-full">
                      {menuChildren?.label}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          <div className="col-span-2">
            <GetInTouch />
          </div>
        </div>
        <hr className="my-4" />
        {/* logos */}
        <div className="flex justify-center items-center xl:justify-between xl:float-left py-2">
          <Link href="/">
            <div className="relative w-[120px] h-[40px] sm:w-[140px] sm:h-[50px]">
              <Image
                src={global?.deped_logo[1]}
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
          <Link href="/" className="xl:mx-4">
            <div className="relative w-[140px] h-[40px] sm:w-[180px] sm:h-[80px]">
              <Image
                src={global?.usaid_logo[1]}
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
          <Link href="/">
            <div className="relative w-[110px] h-[30px] sm:w-[130px] sm:h-[40px]">
              <Image
                src={global?.rti_logo[1]}
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
        {/* abc+ */}
        <p className="xl:hidden font-extrabold text-base text-[#07336E] text-center py-4">
          <span className="text-[#E11C38]">ABC+: </span>
          Advancing Basic Education in the Philippines
        </p>
        <hr className="xl:hidden" />
        <div className="xl:float-right">
          {/* socmed icons */}
          <div className="flex justify-center xl:justify-end pt-4">
            <Link aria-label="Twitter" href="/">
              <TwitterIcon
                width="20"
                height="20"
                fill="#E11C38"
                className="drop-shadow-md"
              />
            </Link>
            <Link aria-label="Facebook" href="/">
              <FbIcon
                width="20"
                height="20"
                fill="#E11C38"
                className="drop-shadow-md mx-6"
              />
            </Link>
            <Link aria-label="LinkedIn" href="/">
              <LinkedInIcon
                width="20"
                height="20"
                fill="#E11C38"
                className="drop-shadow-md"
              />
            </Link>
          </div>

          {/* cc */}
          <div className="flex justify-center items-center pt-4">
            <Image
              src="/svg/copyright.svg"
              alt="Copyright Logo"
              className="mx-1"
              width={15}
              height={15}
            />
            <div className="text-[12px] text-[#656565] font-medium">
              {getCurrentYear()} ABC+. All Rights Reserved.
            </div>
          </div>
          <div className="text-[12px] text-[#656565] text-center font-medium">
            Privacy Policy | Terms of Use
          </div>
        </div>
      </div>
    </div>
  );
}
