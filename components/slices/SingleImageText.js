import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
import Link from "next/link";
export default function SingleImageText({ slice }) {
  // SINGLE IMAGE WITH TEXT BLOCK
  // Default Layout - Left: Image, Right: Text Title and Content
  // Reversed Layout - Left: Text Title and Content, Right: Title (if slice.main.reverse_column is true)

  return (
    <div
      className={
        slice?.main?.bg_color
          ? slice?.main?.image_position === "right"
          ? "trapezoid-bottom-left  md:trapezoid-left md:ml-5 lg:ml-10"
          : "trapezoid-bottom-right  md:trapezoid-right md:mr-5 lg:mr-10"
          : ""
      }
      style={{
        backgroundColor: slice?.main?.bg_color || "none",
        color: slice?.main?.color || "none",
      }}
    >
      <div
        className={`md:w-full max-w-screen-xl mx-auto px-3 md:p-5 my-8 ${
          slice?.main?.bg_color && slice?.main?.image_position === "right"
            ? ""
            : ""
        }`}
      >
        <div
          className={`flex flex-col flex-col-reverse pb-20 md:pb-0 md:grid md:grid-cols-2 gap-4 xl:gap-16 max-w-screen-xl ml-auto ${
            slice?.main?.image_position === "right" && "lg:flex-row-reverse" // Reverse the elements order - in this case, image goes to right while content will be on left
          }`}
        >
          <Image
            alt=""
            blurDataURL={slice?.main?.image}
            src={slice?.main?.image}
            width={460}
            height={460}
            className="w-full rounded-r-xxl rounded-bl-xxl max-h-[360px] lg:max-h-[460px] lg:max-w-[460px] object-cover"
            style={{ aspectRatio: slice?.main?.image_aspect_ratio || "auto" }} // Lets you set image ratio from cms dynamically
          />
          <div
            className={`flex flex-col justify-center lg:gap-4 text-white pt-7 md:pt-0 ${
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
