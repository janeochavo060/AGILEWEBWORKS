import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopBanner({ slice }) {
  const image = `https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`;
  return (
    <div
      className="relative min-h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center"
      style={{
        // background: slice?.main?.bg_color,
        backgroundImage: `${slice?.main?.bg_color}, url(${image})`,
      }}
    >
      {/* <Image alt="" src={image} fill priority /> */}
      <div className="max-w-3xl px-8 lg:ml-[5%] flex flex-col gap-8 z-50">
        <h1 className="text-6xl font-bold leading-tight">
          {slice?.main?.title}
        </h1>
        {slice?.main?.link && (
          <Link
            href={slice?.main?.link}
            className="text-lg black-shadow mr-auto flex items-center gap-3 px-6 py-2 transition ease-in-out delay-150 bg-primary text-white hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full cursor-pointer"
          >
            <span>{slice?.main?.link_label || "Learn more"}</span>
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
  );
}
