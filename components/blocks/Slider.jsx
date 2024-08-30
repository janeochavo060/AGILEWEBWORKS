import Image from "next/image";
import FancyPhotos from "../partials/popups/FancyPhotos";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Block({ id, test, block, mediaHandler }) {
  const { items } = block?.main;
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {items.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <FancyPhotos fancyId={`Slider-${id}`}>
              <div
                data-fancybox={`Slider-${id}`}
                href={
                  mediaHandler?.[`main.items.${index}.media`]?.[0]?.original
                }
              >
                <Image
                  src={
                    mediaHandler?.[`main.items.${index}.media`]?.[0]?.original
                  }
                  width={500}
                  height={500}
                  className="w-full h-[826px] object-cover"
                  alt={item.title}
                />
              </div>
            </FancyPhotos>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
