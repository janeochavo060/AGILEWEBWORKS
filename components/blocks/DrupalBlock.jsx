import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const DrupalBlock = ({ block, mediaHandler }) => {
  const highlightDescription = (desc) => {
    if (!desc) return "";
    return desc.replace(
      /\b1000\b/gi, // Match the word "leading" (case insensitive)
      '<span class="text-orange-500 flex justify-center  text-[42px] lg:text-[84px] 2xl:text-[128px] ">1000</span>'
    );
  };

  return (
    <div className="relative pt-[40px] lg:pt-0 bg-gradient-to-b from-[rgba(0,47,108,0.49)] to-[rgba(0,91,210,0)]">
      <div className=" px-[30px]  py-[60px] h-full 2xl:px-[216px] lg:py-[114px] font-jomolhari">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          speed={500}
          className="w-full rounded-[30px]"
        >
          {mediaHandler["banner.image"].map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item?.original}
                width={1487}
                height={757}
                alt="drupal_image"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" text-[#004E98]  mt-6">
          <div className="flex justify-center text-center pb-[200px]">
            <h2
              className=" max-w-[820px] text-[13px] lg:text-[25px] 2xl:text-[80px] tracking-[3px] "
              dangerouslySetInnerHTML={{
                __html: highlightDescription(block?.banner?.title),
              }}
            />
          </div>
          <div className="flex flex-col space-y-10">
            <div className="flex relative">
              <Image
                src="/images/maintenance.jpg"
                width={292}
                height={148}
                alt="maintenance_icon"
                loading="lazy"
                className="z-10"
              />

              <Image
                src="/images/Vector 1.jpg"
                width={372}
                height={318}
                alt="vector1_icon"
                loading="lazy"
                className="absolute top-[-100px] left-[-30px]  z-0"
              />
            </div>

            <div className="flex justify-center items-center">
              <p className="lg:w-[935px] w-[200px] text-center text-[16px] lg:text-[32px] 2xl:text-[48px] 2xl:tracking-[20px] lg:tracking-[10px] text-stroke-1-black ">
                {block?.banner?.subheading}
              </p>
            </div>

            <div className="flex relative justify-end">
              <Image
                src="/images/updating.jpg"
                width={292}
                height={148}
                alt="maintenance_icon"
                loading="lazy"
                className="z-10"
              />
              <Image
                src="/images/Vector 2.jpg"
                width={343}
                height={271}
                alt="vector1_icon"
                loading="lazy"
                className="absolute top-[-60px] z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrupalBlock;
