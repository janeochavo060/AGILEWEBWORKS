import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Grid, Pagination } from "swiper/modules";

const SecondPageDrupal = ({ block }) => {
  console.log("e", block?.main?.information);

  return (
    <div className="px-[30px] py-[60px] h-full 2xl:px-[216px] lg:py-[114px] font-jomolhari bg-[rgba(75,135,192,0.78)]">
      <div className="hidden lg:block space-y-[77px]">
        {block?.main?.information.map((item, index) => (
          <div
            key={index}
            className="flex w-full h-full border rounded-[70px] bg-[rgba(217,217,217,0.10)] backdrop-blur-[35px]"
          >
            <div
              className={`flex flex-col items-center lg:flex-row xl:py-[67px] xl:px-[80px] py-[30px] px-[30px] ${
                item.position === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:px-[10px]">
                <Image
                  src={item.image}
                  width={150}
                  height={150}
                  alt="drupal_icon_images"
                  loading="eager"
                  className="lg:h-[300px] lg:w-[980px] xl:h-[348px]"
                />
              </div>

              <div className="flex flex-col lg:text-left text-center">
                <div className="text-[20px] lg:text-[30px] 2xl:text-[40px] py-[20px] text-black">
                  {item.title}
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="2xl:text-[25px]"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper for Small Screens */}
      <div className="block lg:hidden  ">
        <Swiper
          slidesPerView={1} // Show one card at a time on small screens
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full "
        >
          {block?.main?.information.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center border rounded-[40px] p-[20px] bg-[rgba(217,217,217,0.10)] backdrop-blur-[35px]">
                <Image
                  src={item.image}
                  width={150}
                  height={4}
                  alt="drupal_icon_images"
                  loading="lazy"
                  className="h-[200px] object-contain"
                />
                <div className="text-[17px] py-[10px] text-black text-center">
                  {item.title}
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="text-center text-[13px]"
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SecondPageDrupal;
