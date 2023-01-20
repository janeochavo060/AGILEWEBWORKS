import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
export default function TextMultipleImage({ slice }) {
  const images = slice?.main?.images || [];

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
