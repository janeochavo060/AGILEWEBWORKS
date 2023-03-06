import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
import Link from "next/link";
export default function TextMultipleImage({ slice }) {
  const images = slice?.main?.images || [];
  return (
    <div
      className={`black-shadow md:p-10 ${
        slice?.main?.bg_color
          ? slice?.main?.image_position === "right"
          ? "trapezoid-bottom-left  md:trapezoid-left md:ml-5 lg:ml-10"
          : "trapezoid-bottom-right  md:trapezoid-right md:mr-5 lg:mr-10"
          : ""
      }`}
      style={{ backgroundColor: slice?.main?.bg_color }}
    >
      <div
        className={`w-full max-w-screen-xl mx-auto p-3 md:p-5 ${
          slice?.main?.image_position === "left"
            ? ""
            : ""
        }`}
      >
        <div className="flex flex-col pb-20 gap-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3  xl:gap-16 max-w-screen-xl ml-auto">
          <div className="flex flex-col justify-center gap-4 text-white pt-7 md:pt-0">
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
          <div
            className={`lg:col-span-2 grid grid-cols-3 gap-4 ${
              slice?.main?.image_position === "left"
                ? "order-first lg:pr-6 "
                : "lg:pl-6"
            }`}
          >
            {images.map((image, i) => (
              <div key={i} className={i % 2 ? '' : 'flex flex-col justify-center col-span-2'}>
                <Image
                  alt={image}
                  blurDataURL={image}
                  src={image}
                  width="1000"
                  height="1000"
                  className={`rounded-xl ${i % 2 ? '' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
