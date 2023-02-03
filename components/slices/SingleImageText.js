import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
import Link from "next/link";
export default function SingleImageText({ slice }) {
  // SINGLE IMAGE WITH TEXT BLOCK

  return (
    <div
      className={
        slice?.main?.bg_color
          ? slice?.main?.reverse_column
            ? "trapezoid-left"
            : "trapezoid-right"
          : ""
      }
      style={{
        backgroundColor: slice?.main?.bg_color,
        color: slice?.main?.color || "",
      }}
    >
      <div className="w-[95%] md:w-full my-16 max-w-screen-xl mx-auto pr-[7%] 2xl:pr-0">
        <div
          className={`flex flex-col lg:flex-row items-center gap-4 xl:gap-16 max-w-screen-xl ml-auto p-4 md:py-8 ${
            slice?.main?.reverse_column && "lg:flex-row-reverse"
          }`}
        >
          <Image
            alt=""
            blurDataURL={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
            src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
            width={460}
            height={460}
            className="w-full rounded-r-xxl rounded-bl-xxl lg:max-h-[460px] lg:max-w-[460px] object-cover"
            style={{ aspectRatio: slice?.main?.image_aspect_ratio || "auto" }} // Lets you set image ratio from cms dynamically
          />
          <div
            className={`flex flex-col justify-center gap-4 ${
              slice?.main?.bg_color && !slice?.main?.color ? "text-white" : ""
            }`}
          >
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
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 12"
                  fill="currentColor"
                >
                  <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
