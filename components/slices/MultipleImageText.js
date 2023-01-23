import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
export default function MultipleImageText({ slice }) {
  const images = slice?.main?.images || [];

  // MULTIPLE IMAGES WITH TEXT BLOCK ON RIGHT
  return (
    <div
      className="trapezoid-right"
      style={{ backgroundColor: slice?.main?.bg_color }}
    >
      <div className="w-[95%] md:w-full my-8 max-w-screen-xl mx-auto pr-[7%] xl:pr-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-16 max-w-screen-xl ml-auto p-4 xl:p-0">
          <div className="flex flex-col sm:flex-row justify-center xl:justify-start sm:gap-8 lg:pl-6 xxl:p-0">
            {images.map((image, i) => (
              <Image
                key={i}
                alt=""
                blurDataURL={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`}
                src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`}
                width="300"
                height="700"
                className={`h-[460px] rounded-xxl mx-auto xl:mx-0 ${
                  i % 2 ? "mt-auto" : "my-8 sm:mb-16"
                }`}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center gap-2 text-white">
            <TitleContentBlock slice={slice} />
          </div>
        </div>
      </div>
    </div>
  );
}
