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
      <div className="w-[95%] md:w-full my-8 max-w-screen-xl mx-auto pl-[7%] xl:pl-0 flex items-center gap-8 py-8">
        <Image
          alt=""
          src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
          width={460}
          height={460}
          className="w-full rounded-r-xxl rounded-bl-xxl"
        />
        <div className="p-8 text-white space-y-4">
          <TitleContentBlock slice={slice} />
        </div>
      </div>
    </div>
  );
}
