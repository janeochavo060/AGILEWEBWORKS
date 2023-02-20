import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Image from 'next/image'
import Jsona from "jsona";
const dataFormatter = new Jsona();
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import { getCurrentYear } from '@/lib/services/globalService';
const Footer = (props) => {
  const router = useRouter()
  const tenantDetails = dataFormatter.deserialize(globalData?.tenantDetails|| {});
  const global = tenantDetails?.data?.main;
  const [upperHeaderMenu, setUpperHeaderMenu] = useState([
    { name: "Websites", url: "/websites" },
    { name: "Apps & Software", url: "/apps-and-software" },
    { name: "Capabilities", url: "/capabilities" },
    { name: "Contact", url: "/contact" },
  ]);
  return (
    <>
      <div
        className={`md:py-4 py-0 z-50 w-full transition duration-600 ease-in-out`}
      >
        <div className="flex flex-col justify-center items-center text-gray-500">
          <div className="xxl:max-w-[1345px] xl:max-w-[1260px] w-full items-center mx-auto overflow-x-hidden overflow-y-hidden ">
            <div className="xl:flex hidden flex-row md:mx-0 mx-4 py-4 items-center justify-between">
              <div className="flex flex-no-wrap border-transparent items-center whitespace-nowrap overflow-x-auto">
                {!upperHeaderMenu.length && (
                  <div className="border-b-4 border-transparent ">Loading</div>
                )}

                {upperHeaderMenu &&
                  upperHeaderMenu.map((nav, i) => (
                    <Link href={nav.url || router.pathname} key={i}>
                      <div
                        className={`
                              md:text-base text-sm mr-16  md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal
                              ${
                                router.pathname.includes(nav.url) &&
                                router.pathname !== "/"
                                  ? "underline underline-offset-4"
                                  : ""
                              }
                            `}
                      >
                        {nav.name}
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="">
                <p
                  className={`md:text-base font-semibold text-sm mx-10  md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal`}
                >
                  {global?.email}
                </p>
              </div>
              <div className="">
                <p
                  className={`text-right font-semibold md:text-base text-sm md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal`}
                >
                  L3-02B, SOHO Retail Podium 748 <br /> Shaw Blvd, Greenfield
                  District, <br /> Mandaluyong City, 1552
                </p>
              </div>
            </div>
          </div>
          <div className="xxl:max-w-[1345px] xl:max-w-[1260px] w-full items-center mx-auto overflow-x-hidden overflow-y-hidden border-t border-gray-400">
            <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center">
              <div className="flex text-sm xxl:mx-0 py-6 cursor-pointer">
                <Image
                  src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${global?.logo}`}
                  alt="Halcyon Logo"
                  className="mx-1"
                  width={150}
                  height={24}
                />
              </div>
              <div className="flex-row md:mx-0 mx-6 py-6 ">
                {/* <div className="flex flex-no-wrap border-transparent items-center whitespace-nowrap overflow-x-auto">
                  <Image
                    src="/svg/twitter.svg"
                    alt="Vercel Logo"
                    className='mx-1'
                    width={35}
                    height={24}
                  />
                  <Image
                    src="/svg/github.svg"
                    alt="Vercel Logo"
                    className='mx-1'
                    width={35}
                    height={24}
                  />
                  <Image
                    src="/svg/mail.svg"
                    alt="Vercel Logo"
                    className='mx-1'
                    width={35}
                    height={24}
                  />
                </div> */}
                <div className="flex flex-col md:items-end items-center">
                  <div className="cursor-pointer">
                    Privacy | Terms & Conditions
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <Image
                      src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${global?.logo}`}
                      alt="Copyright Logo"
                      className="mx-1"
                      width={15}
                      height={15}
                    />
                    <p>Copyright {getCurrentYear()} {global.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
