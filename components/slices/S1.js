import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
const S1 = ({ slice }) => {
  return (
    <div
      className="flex flex-col justify-center p-6 lg:py-12"
      style={{ backgroundColor: `${slice?.main?.bg_color || "#FFFFFF"}` }}
    >
      <div className="w-full max-w-screen-xl mx-auto text-dim-black space-y-4">
        <div className="max-w-3xl space-y-4">
          <TitleContentBlock
            slice={slice}
            titleClass="text-4xl lg:text-7xl leading-0"
            contentClass="text-teal-700"
          />
        </div>
        <button
          className="flex px-4 py-2 transition ease-in-out delay-150 bg-sky-400 hover:bg-blue-500 hover:to-blue-500 hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full text-white cursor-pointer"
          onClick={() => {}}
          aria-label="Learn More"
        >
          <span>Learn More</span>
          <Image
            src="/svg/arrow-right-white.svg"
            alt="Arrow right"
            className="mx-1"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );

  return (
    <div
      className="flex flex-col justify-end items-center w-full  h-full lg:mx-0 px-6 py-6 lg:py-12"
      style={{ backgroundColor: `${slice?.main?.bg_color || "#FFFFFF"}` }}
    >
      <div className="flex justify-start items-start max-w-screen-xl w-[90%] xl:w-full">
        <div className="flex max-w-3xl w-full items-center">
          <div className="flex flex-col items-start gap-4">
            <h2 className="lg:text-7xl leading-0 text-4xl font-bold text-slate-800 ">
              {slice?.main?.title ||
                "Donec quam felis, ultricies pellentesque eu sem."}
            </h2>
            <div
              className="text-[18px] leading-[24px] text-teal-800 my-2"
              dangerouslySetInnerHTML={{
                __html:
                  slice?.main?.content ||
                  "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</p>",
              }}
            />
            <button
              className="flex px-4 py-2 transition ease-in-out delay-150 bg-sky-400 hover:bg-blue-500 hover:to-blue-500 hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full text-white cursor-pointer"
              onClick={() => {}}
              aria-label="Learn More"
            >
              <span>Learn More</span>
              <Image
                src="/svg/arrow-right-white.svg"
                alt="Arrow right"
                className="mx-1"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default S1;
