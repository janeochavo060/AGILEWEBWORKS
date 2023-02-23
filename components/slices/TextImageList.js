import Image from "next/image";
import React from "react";
import TitleContentBlock from "../partials/TitleContentBlock";

export default function TextImageList({ slice }) {
  const images = slice?.main?.images || [];
  return (
    <div className="flex flex-col text-center space-y-4 my-16">
      <TitleContentBlock slice={slice} contentClass="max-w-xl px-4 mx-auto" />
      <div className="flex flex-wrap items-center justify-center gap-16 p-8">
        {images.map((image, i) => (
          <div key={i}>
            <Image
              alt=""
              src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`}
              width={100}
              height={100}
              className="w-full max-h-[200px] grayscale hover:grayscale-0 transition hover:scale-110 duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
