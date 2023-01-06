import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Image from 'next/image'
const Menu = (props) => {
  const router = useRouter()
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [upperHeaderMenu, setUpperHeaderMenu] = useState([
    { name: "About", url: "/about" },
    { name: "Articles", url: "/articles" },
    { name: "Topics", url: "/topics" },
  ]);
  return (
    <>
      <div
        className={`sticky top-0 md:py-4 py-0 z-50 w-full transition duration-600 ease-in-out`}
      >
        <div className="xxl:max-w-[1345px] xl:max-w-[1260px] w-full items-center mx-auto overflow-x-hidden overflow-y-hidden ">
          <div className="flex lg:justify-start justify-between items-center">
            <div
              className="flex text-[20px] py-6 xl:px-0 px-4 cursor-pointer font-extrabold tracking-wide"
              onClick={() => router.push(`/`)}
            >
              Cool Writings
            </div>
            <div className="xl:flex hidden flex-row md:mx-0 mx-6 py-6 ">
              <div className="flex flex-no-wrap border-transparent items-center whitespace-nowrap overflow-x-auto">
                {!upperHeaderMenu.length && (
                  <div className="border-b-4 border-transparent ">
                    Loading
                  </div>
                )}

                {upperHeaderMenu &&
                  upperHeaderMenu.map((nav, i) => (
                    <Link
                      href={nav.url ? nav.url : router.pathname}
                      as={nav.url ? nav.url : router.pathname}
                      key={i}
                    >
                      <div
                        className={`
                            md:text-base text-sm mx-10  md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal
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
            </div>
            <div
              className="xl:hidden flex mx-6"
              onClick={() => setShowSideMenu(!showSideMenu)}
            >
              {showSideMenu ? (
                <Image
                  src="/svg/close.svg"
                  alt="Vercel Logo"
                  className='mx-1'
                  width={20}
                  height={24}
                />
              ) : (
                <Image
                  src="/svg/burger.svg"
                  alt="Vercel Logo"
                  className='mx-1'
                  width={20}
                  height={24}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
