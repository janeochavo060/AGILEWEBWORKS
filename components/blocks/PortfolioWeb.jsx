"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  LeftArrowIcon,
  RightArrowIcon,
  MobileIcon,
  DesktopIcon,
} from "@/public/icons/icons";

const PortfolioWeb = ({ block }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0); // Track selected child item

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  console.log("first", block?.portfoliowebsite?.main);
  return (
    <div className="relative px-[30px] py-[60px] h-full 2xl:px-[216px] lg:py-[114px] font-jomolhari">
      <div
        className="text-[23px] text-center tracking-[10px] lg:text-[60px]  text-stroke-1-black text-[#004E98]"
        style={{
          textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        {block?.portfoliowebsite?.title}
      </div>

      {/* Carousel Section */}
      <div className="relative flex items-center justify-center mt-[50px] ">
        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          className={`cursor-pointer transition-opacity absolute z-10 left-0 top-1/2 -translate-y-1/2 ${
            isBeginning ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <LeftArrowIcon className=" w-[30px] lg:w-[50px] 2xl:w-[73px] 2xl:h-[48px]" />
        </button>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={false} // Disable loop to detect start & end
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          className="w-full max-w-5xl "
        >
          {block?.portfoliowebsite?.main.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="lg:flex mx-auto h-full">
                <div>
                  <Image
                    src={item?.image}
                    width={358}
                    height={706}
                    alt="mobileportfolio"
                    className="hidden lg:block"
                  />
                  <Image
                    src={item?.desktopimage}
                    width={358}
                    height={100}
                    alt="mobileportfolio"
                    className=" lg:hidden block mx-auto"
                  />
                </div>
                <div className="lg:pl-[20px]">
                  <div className="flex flex-col lg:flex-row items-center lg:items-baseline justify-center lg:justify-start space-x-4">
                    <div className="text-[20px] lg:text-[35px] 2xl:text-[48px] capitalize mt-4">
                      {item?.title}
                    </div>

                    <div className="flex items-center  space-x-2">
                      <Image
                        src="/images/globe.jpg"
                        width={20}
                        height={10}
                        alt="globe_url"
                      />
                      <Link
                        href={item?.url}
                        className="text-[12px] lg:text-[16px] 2xl:text-[20px] text-[#004E98] underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item?.url.split("/")[2]}
                      </Link>
                    </div>
                  </div>
                  <div className=" text-[13px] lg:text-[20px] 2xl:text-[24px] flex items-center justify-center text-center lg:justify-start   mt-2 text-[#4A4A4A]">
                    {item?.description}
                  </div>

                  {/* Clickable Titles */}
                  <div className=" mt-[66px]   flex justify-center items-center place-items-baseline space-x-2">
                    {item?.childrepeater.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        className={`cursor-pointer text-[12px] lg:text-[16px] flex p-[10px]  lg:p-[20px]  ${
                          selectedIndex === childIndex
                            ? "text-blue-600 2xl:text-lg border-b-4 border-blue-600 rounded-b-sm bg-[#D8ECFF]"
                            : "text-[#757575] border-b-4 border-transparent"
                        }`}
                        onClick={() => setSelectedIndex(childIndex)}
                      >
                        {childIndex === 0 && <MobileIcon />}

                        {childIndex === 1 && <DesktopIcon />}

                        {child.title}
                      </div>
                    ))}
                  </div>

                  <div className="border-2"></div>

                  {/* Display Selected Image */}
                  {item?.childrepeater[selectedIndex] && (
                    <div className=" mt-4">
                      <Image
                        src={item.childrepeater[selectedIndex].image}
                        width={600}
                        height={455}
                        alt="scores"
                        className="mx-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          className={`cursor-pointer transition-opacity absolute z-10 right-0 top-1/2 -translate-y-1/2 ${
            isEnd ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <RightArrowIcon className="w-[30px] lg:w-[50px] 2xl:w-[73px] 2xl:h-[48px]" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioWeb;
