import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Grid, Pagination } from "swiper/modules";

const ClientBlock = ({ block }) => {
  return (
    <div className="lg:mb-[154px] overflow-hidden">
      <div className="w-full h-auto px-[20px] lg:px-[137px] py-[50px] lg:py-[114px] font-jomolhari text-[#004E98] uppercase">
        <div
          className="text-[23px] text-center tracking-[10px] lg:text-[35px] text-stroke-1-black"
          style={{
            textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {block?.our_client?.title}
        </div>

        {/* Swiper Carousel for Small Screens */}
        <div className="block lg:hidden mt-[50px] ">
          <Swiper
            slidesPerView={2} // 2 columns
            grid={{ rows: 4, fill: "row" }} // 4 rows, filling row-wise
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Grid, Pagination]}
            className="w-full h-[500px]"
          >
            {block?.our_client?.logos?.map((item, index) => (
              <SwiperSlide key={index} className="">
                <Image
                  src={item}
                  width={150}
                  height={150}
                  alt="our_client image"
                  className="object-contain flex m-auto h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Original Grid for Large Screens */}
        <div className="hidden lg:flex flex-wrap mx-[-20px] items-center justify-center mt-[113px]">
          {block?.our_client?.logos?.map((item, index) => (
            <div
              key={index}
              className="md:max-w-[20%] lg:max-w-[16.666666667%] w-full lg:mb-[50px] px-[20px]"
            >
              <Image
                src={item}
                width={250}
                height={250}
                alt="our_client image"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientBlock;
