import Image from "next/image";
import React, { useState } from "react";
import laptop from "@/public/images/laptop.png";

export default function TitledListWithMultiImages({ slice }) {
  const [active, setActive] = useState("");
  const stages = slice?.main?.stages || [];
  const stage = stages.find((stage) => stage?.name === active) || stages[0];

  const desktopImage = `https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${stage?.desktop_image}`;

  return (
    <div
      style={{ backgroundColor: `${slice?.main?.bg_color || "transparent"}` }}
      className=""
    >
      <div
        id={slice?.id}
        className="min-h-[75vh] w-full max-w-screen-xl mx-auto py-8 space-y-4 px-8 xl:px-0 flex items-center gap-8 border-t-2 border-black/10"
      >
        <div>
          {slice?.main?.title && <h2 className="mb-4">{slice?.main?.title}</h2>}
          {stages && stages.length > 0 && (
            <div
              className="grid grid-flow-col md:flex flex-col gap-8 h-full w-full md:w-1/3"
              style={{
                gridTemplateRows: `repeat(${Math.ceil(
                  stages.length / 2
                )}, 1fr)`,
              }}
            >
              {stages.map((item, i) => (
                <button
                  key={item?.name}
                  aria-label={item?.name}
                  className={`text-left transition-all flex flex-col md:flex-row md:items-center gap-x-4 text-3xl font-bold`}
                  onClick={() => setActive(item?.name)}
                >
                  <span className="text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`underline-animation ${
                      stage?.name === item?.name && "underline-animation-active"
                    }`}
                  >
                    {item?.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-8 w-full">
          <div className="w-full space-y-12">
            {stage?.title && (
              <h3 className="text-3xl font-bold text-center max-w-2xl mx-auto">
                {stage?.title}
              </h3>
            )}
            {/* DESKTOP IMAGE */}
            {stage?.desktop_image && (
              <div className="relative">
                <Image
                  alt=""
                  src={laptop}
                  blurDataURL={laptop}
                  width="400"
                  height="200"
                  className="h-full w-full z-10"
                />
                <div className="absolute top-[6.3%] w-full max-w-[78%] max-h-[85%] h-full left-1/2 -translate-x-1/2">
                  <Image
                    alt=""
                    src={desktopImage}
                    blurDataURL={desktopImage}
                    fill
                    className="h-full w-full object-cover bg-white"
                  />
                </div>
              </div>
            )}
          </div>
          {stage?.mobile_images && stage?.mobile_images.length > 0 && (
            <div className="flex pt-[15%]">
              {stage?.mobile_images.map((image) => {
                if (!image) return <></>;
                return (
                  <Image
                    key={image}
                    alt=""
                    src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`}
                    blurDataURL={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`}
                    width="400"
                    height="200"
                    className="aspect-[9/16] w-full max-w-[55%] max-h-[40vh] object-top rounded-xxl shadow-lg last:-ml-[10%] first:-mt-[50%]"
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
