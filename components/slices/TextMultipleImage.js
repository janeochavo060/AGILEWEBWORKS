import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
import Link from "next/link";
export default function TextMultipleImage({ slice }) {
  const images = slice?.main?.images || [];
  return (
    <div
      className={`black-shadow ${
        slice?.main?.bg_color
          ? slice?.main?.image_position === "right"
            ? "trapezoid-left"
            : "trapezoid-right"
          : ""
      }`}
      style={{ backgroundColor: slice?.main?.bg_color }}
    >
      <div
        className={`w-[95%] md:w-full my-16 max-w-screen-xl mx-auto ${
          slice?.main?.image_position === "left"
            ? "pr-[7%] 2xl:pr-0"
            : "pl-[7%] 2xl:pl-0  "
        }`}
      >
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-16 max-w-screen-xl ml-auto p-4 xl:p-0">
          <div className="col-span-1 flex flex-col justify-center gap-4 text-white">
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
            className={`col-span-2 flex flex-col lg:flex-row justify-center xl:justify-start sm:gap-8 xxl:p-0 ${
              slice?.main?.image_position === "left"
                ? "order-first lg:pr-6 "
                : "lg:pl-6"
            }}`}
          >
            {images.map((image, i) => (
              <Image
                key={i}
                alt={image}
                blurDataURL={image}
                src={image}
                width="1000"
                height="1000"
                className={`rounded-xxl mx-auto xl:mx-0 w-auto ${
                  i % 2 ? "mt-8 h-[540px]" : "my-auto h-[40%] 2xl:h-[50%]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
