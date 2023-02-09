import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
import Link from "next/link";
export default function TextMultipleImage({ slice }) {
  const images = slice?.main?.images || [];

  return (
    <div
      className="trapezoid-left black-shadow"
      style={{ backgroundColor: slice?.main?.bg_color }}
    >
      <div className="w-[95%] md:w-full my-16 max-w-screen-xl mx-auto pl-[7%] 2xl:pl-0">
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
          <div className="col-span-2 flex flex-col lg:flex-row justify-center xl:justify-start sm:gap-8 lg:pl-6 xxl:p-0">
            {images.map((image, i) => (
              <Image
                key={i}
                alt=""
                blurDataURL={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`}
                src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`}
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

  // MULTIPLE IMAGES WITH TEXT BLOCK ON LEFT
  return (
    <div
      className="trapezoid-left"
      style={{ backgroundColor: slice?.main?.bg_color }}
    >
      <div className="w-[95%] md:w-full my-8 max-w-screen-xl mx-auto pl-[7%] xl:pl-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-4 xl:p-0">
          <div className="col-span-1 flex flex-col justify-center gap-6 text-white py-6 md:p-12">
            <TitleContentBlock slice={slice} />
          </div>
          <div className="col-span-2 flex flex-col md:flex-row items-center gap-8 py-8">
            {images.map((image, i) => (
              <Image
                key={i}
                alt=""
                blurDataURL={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`}
                src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`}
                width={200}
                height={200}
                className={`w-full object-cover rounded-xxl ${
                  i === 1 ? "max-h-[540px] lg:-mb-10" : "max-h-[50%] h-full"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
