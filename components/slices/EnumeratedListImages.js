import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
import TitleContentBlock from "../partials/TitleContentBlock";
export default function EnumeratedListImages({ slice }) {
  const [active, setActive] = useState("");

  const stages = slice?.main?.stages || [];
  const stage = stages.find((stage) => stage?.name === active) || stages[0];
  const images = (stage?.images || []).map(
    (img) =>
      `https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${img}`
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto py-8 md:max-h-[calc(100vh-111px)] space-y-4 px-8 xl:px-0">
      <TitleContentBlock
        slice={slice}
        className="text-center"
        contentClass="max-w-lg px-4 mx-auto"
      />
      <div className="flex flex-col-reverse md:flex-row items-center my-8 justify-around">
        <div
          className="grid grid-flow-col md:flex flex-col gap-8 h-full w-full md:w-1/3"
          style={{
            gridTemplateRows: `repeat(${Math.ceil(stages.length / 2)}, 1fr)`,
          }}
        >
          {stages.map((item, i) => (
            <button
              key={item?.name}
              aria-label={item?.name}
              className={`text-left transition-all flex flex-col md:flex-row md:items-center gap-x-4 text-3xl font-bold`}
              onClick={() => setActive(item?.name)}
            >
              <span className="text-sm">{String(i + 1).padStart(2, "0")}</span>
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
        <div className="w-full flex flex-col md:items-end items-center">
          <div className="flex items-end w-full md:w-auto">
            <div className="relative w-2/3 lg:w-[500px] md:w-[190px] lg:h-[300px] h-[250px] m-2">
              <Image
                src={images[0]}
                blurDataURL={images[0]}
                alt="image"
                className="object-cover rounded-b-xxl rounded-tr-xxl shadow-md"
                fill
              />
            </div>
            <div className="relative w-1/3 lg:w-[200px] md:w-[150px] lg:h-[300px] h-[250px] m-2">
              <Image
                src={images[1]}
                blurDataURL={images[1]}
                alt="image"
                className="object-cover rounded-b-xxl rounded-tr-xxl shadow-md"
                fill
              />
            </div>
          </div>
          <div className="flex justify-end items-end w-full">
            <div className="relative lg:w-[600px] w-2/3 md:w-[300px] lg:h-[370px] md:h-[200px] aspect-video m-4">
              <Image
                src={images[2]}
                blurDataURL={images[2]}
                alt="image"
                fill
                className="object-cover rounded-b-xxl rounded-tr-xxl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}