import Image from "next/image";
import React from "react";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
import YouTubeEmbed from "@/components/partials/YouTubeEmbed";

export default function TextMultipleImageVideo({ slice }) {
  const images = slice?.main?.images || []
  return (
    <div className="flex items-center h-screen my-20 sm:my-10 sm:mb-28 lg:my-0">
      <div className="relative w-full">
        {/* <div className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-y-12 lg:gap-y-8 gap-x-8 max-w-screen-xl mx-auto px-4 md:px-8 2xl:px-0 h-full"> */}
        <span
          className="w-full h-full absolute -z-10 left-0 halcyon-advantage sm:halcyon-advantage1 lg:halcyon-advantage2"
          // style={{
          //   background: "rgba(253, 147, 41, .5)",
          //   transform: "matrix(-1, 0, 0, 1, 0, 0)",
          // }}
        />
        <div className=" flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-y-12 lg:gap-y-8 gap-x-8 max-w-screen-xl mx-auto px-4 md:px-8 2xl:px-0 h-full">
          <div className="lg:max-w-md space-y-4">
            <TitleContentBlock slice={slice} titleClass="text-3xl sm:text-4xl md:mt-20 lg:mt-0 " />
          </div>
          <div className="flex flex-wrap">
            {/* <div className="grid grid-cols-5 gap-4 h-full"> */}
            <div className="w-full flex justify-center max-h-[45vh] min-h-[45vh]">
              <div className="lg:max-w-[45vw] aspect-video lg:aspect-square  rounded-r-xxl rounded-bl-xxl overflow-hidden lg:-mr-[10%]">
                <YouTubeEmbed
                  src={slice?.main?.video}
                  playButtonClass="text-white"
                />
              </div>
            </div>
            {images.map((img, i) => {
              return (
                <div
                  key={img + i}
                  className={`flex w-1/2 py-4 ${
                    i === 0
                      ? "lg:max-h-[200px] pr-2 lg:py-0 lg:-mt-[10%] lg:px-4"
                      : "lg:max-h-[240px] pl-2"
                  }`}
                >
                  <Image
                    alt=""
                    src={img}
                    blurDataURL={img}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-r-xxl rounded-bl-xxl"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
