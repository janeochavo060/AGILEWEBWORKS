import Image from "next/image";
import React from "react";
import TitleContentBlock from "../partials/TitleContentBlock";
import { Slide } from "react-slideshow-image";
import { useWindowSize } from "react-use";

export default function TextImageList({ slice }) {
  return <></>;
  const images = slice?.main?.images || [];
  const { width } = useWindowSize();
  const isLaptop = width <= 1024 && width > 768;
  const isTablet = width <= 768 && width > 425;
  const isMobile = width <= 425 && width > 320;
  const isMobileSmall = width <= 320;

  const OurClientsSlideShow = () => {
    const properties = {
      duration: 3000,
      transitionDuration: 500,
      slidesToShow: isLaptop
        ? 5
        : isTablet
        ? 3
        : isMobile
        ? 2
        : isMobileSmall
        ? 1
        : 8,
      slidesToScroll: isTablet ? 3 : isMobile ? 1 : isMobileSmall ? 1 : 4,
      autoplay: false,
      arrows: slice?.main?.images?.length <= 8 ? false : true,
      canSwipe: slice?.main?.images?.length <= 8 ? false : true,
      indicators: false,
    };

    return images.length ? (
      <div>
        <div className="block justify-center m-2 max-w-[90%] !m-auto sm:m-6">
          <Slide {...properties}>
            {images.map((image, i) => (
              <div key={i} className="flex justify-center m-4">
                <Image
                  alt={image}
                  src={image}
                  width={100}
                  height={100}
                  className="object-contain h-16 w-[80%] xl:h-56 xl:w-64 lg:h-40 lg:w-48 md:h-40 md:w-40 hover:scale-110 duration-300"
                />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    ) : null;
  };

  return (
    <div className="flex flex-col text-center space-y-4 mt-16">
      <TitleContentBlock slice={slice} contentClass="max-w-xl px-4 mx-auto" />
      <OurClientsSlideShow />
    </div>
  );
}
