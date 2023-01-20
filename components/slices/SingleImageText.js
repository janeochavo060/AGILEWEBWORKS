import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
export default function SingleImageText({ slice }) {
  // SINGLE IMAGE WITH TEXT BLOCK

  return (
    <div
      className="trapezoid-right"
      style={{ backgroundColor: slice?.main?.bg_color }}
    >
      <div className="w-[95%] md:w-full my-8 max-w-screen-xl mx-auto pr-[7%] xl:pr-0">
        <div className="flex flex-col lg:flex-row items-center gap-4 xl:gap-16 max-w-screen-xl ml-auto p-4 md:py-8">
          <Image
            alt=""
            blurDataURL={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
            src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
            width={460}
            height={460}
            className="w-full rounded-r-xxl rounded-bl-xxl lg:min-h-[460px] lg:min-w-[460px] object-cover"
          />
          <div className="flex flex-col justify-center gap-2 text-white">
            <TitleContentBlock slice={slice} />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div
      className="trapezoid-right"
      style={{ backgroundColor: slice?.main?.bg_color }}
    >
      <div className="w-[95%] md:w-full my-8 max-w-screen-xl mx-auto px-[7%] xl:px-0 flex flex-col lg:flex-row items-center gap-8 py-8">
        <Image
          alt=""
          blurDataURL={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
          src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
          width={460}
          height={460}
          className="w-full rounded-r-xxl rounded-bl-xxl lg:min-h-[560px] lg:min-w-[560px] object-cover"
        />
        <div className="p-8 text-white space-y-4">
          <TitleContentBlock slice={slice} />
        </div>
      </div>
    </div>
  );
}
