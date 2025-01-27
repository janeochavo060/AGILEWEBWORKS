import React from "react";
import menuNavbar from "@/lib/preBuildScripts/static/menuNavbar.json";
import logo from "@/lib/preBuildScripts/static/logo.json";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full h-[91px] px-[137px]  border flex items-center justify-between">
          <div className=" ">
            <Image
              src={logo?.data?.main?.image}
              width={209}
              height={76}
              alt="logo image"
            />
          </div>
          <div className="font-jomolhari text-[#004E98]">
            {menuNavbar?.parentNodes?.map((item, index) => {
              return (
                <>
                  <Link className="px-[40px]" key={index} href={item.url}>
                    {item.label}
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
