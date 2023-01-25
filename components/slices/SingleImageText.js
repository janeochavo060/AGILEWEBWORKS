import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
import Link from "next/link";
export default function SingleImageText({ slice }) {
  // SINGLE IMAGE WITH TEXT BLOCK

  return (
    <div
      className="trapezoid-right"
      style={{ backgroundColor: slice?.main?.bg_color }}
    >
      <div className="w-[95%] md:w-full my-8 max-w-screen-xl mx-auto pr-[7%] 2xl:pr-0">
        <div className="flex flex-col lg:flex-row items-center gap-4 xl:gap-16 max-w-screen-xl ml-auto p-4 md:py-8">
          <Image
            alt=""
            blurDataURL={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
            src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
            width={460}
            height={460}
            className="w-full rounded-r-xxl rounded-bl-xxl lg:min-h-[460px] lg:min-w-[460px] object-cover"
          />
          <div className="flex flex-col justify-center gap-4 text-white">
            <TitleContentBlock slice={slice} />
            {slice?.main?.link && (
              <Link
                href={slice?.main?.link}
                className="mr-auto flex items-center gap-2 px-4 py-2 transition ease-in-out delay-150 bg-white hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full cursor-pointer"
                style={{ color: slice?.main?.bg_color }}
              >
                <span>Learn More</span>
                <svg
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </Link>
            )}
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
