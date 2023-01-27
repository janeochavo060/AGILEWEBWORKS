import Image from "next/image";
import React from "react";
import TitleContentBlock from "../partials/TitleContentBlock";
import YouTubeEmbed from "../partials/YouTubeEmbed";

export default function TextMultipleImageVideo({ slice }) {
  const images = (slice?.main?.images || []).map(
    (image) =>
      `https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`
  );
  console.log({ slice, images });
  return (
    <div className="relative py-8 h-screen flex items-center">
      <span
        className="w-full h-full absolute -z-10 left-0"
        style={{
          background: "rgba(253, 147, 41, .5)",
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
          clipPath: "polygon(0 20%, 35% 20%, 35% 50%, 0% 100%)",
          // clipPath: "polygon(0 20%, 35% 20%, 35% 60%, 0% 100%)",
        }}
      />
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-screen-xl mx-auto px-4 md:px-8 2xl:px-0 h-full">
        <div className="lg:max-w-lg space-y-4">
          <TitleContentBlock slice={slice} titleClass="text-4xl" />
        </div>
        <div className="flex flex-wrap h-full">
          {/* <div className="grid grid-cols-5 gap-4 h-full"> */}
          <div className="w-full flex justify-center border">
            <div className="w-1/2 h-auto aspect-square  rounded-r-xxl rounded-bl-xxl overflow-hidden lg:-mr-[10%]">
              <YouTubeEmbed
                src={slice?.main?.video}
                height="100%"
                playButtonClass="text-white"
              />
            </div>
          </div>
          {images.map((img, i) => {
            return (
              <div
                key={img + i}
                className={`flex w-1/2 ${
                  i === 0
                    ? "max-h-[240px] lg:-mt-[15%] px-4"
                    : "max-h-[240px] py-4"
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
  );
}
