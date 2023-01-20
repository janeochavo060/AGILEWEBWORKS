import React from "react";
import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
export default function S3({ slice }) {
  const images = slice?.main?.images || [];

  // MULTIPLE IMAGES WITH TEXT BLOCK ON RIGHT
  return (
    <div className="trapezoid-right bg-accent-1">
      <div className="w-[95%] md:w-full my-8 max-w-screen-xl mx-auto pr-[7%] xl:pr-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-16 max-w-screen-xl ml-auto p-4 xl:p-0">
          <div className="flex flex-col sm:flex-row sm:gap-8 lg:pl-6 xxl:p-0">
            {images.map((image, i) => (
              <Image
                key={i}
                alt=""
                src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${image}`}
                width="300"
                height="700"
                className={`h-[460px] w-full object-cover rounded-xxl ${
                  i % 2 ? "mt-auto" : "my-8 sm:mb-16"
                }`}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center gap-2 text-white">
            <TitleContentBlock slice={slice} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    // LEFT IMAGES MOBILE; TITLE; DESCRIPTION
    <div className="flex my-8 mr-8">
      <div className="flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0 bg-red-700">
        <div className="flex md:flex-row flex-col-reverse justify-between items-center xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full ">
          <div className="flex md:flex-row flex-col items-center w-[600px] top-0 right-0">
            <div className="relative m-4 md:w-[260px] md:h-[500px] w-[260px] h-[500px]">
              <Image
                src={"/mockups/wingzone_mobilea.jpg"}
                alt="image"
                className=" rounded-[20px] shadow-md"
                fill
              />
            </div>
            <div className="relative m-4 md:w-[260px] md:h-[500px] w-[260px] h-[500px] mt-auto">
              <Image
                src={"/mockups/wingzone_mobileb.jpg"}
                alt="image"
                className=" rounded-[20px] shadow-md"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start md:m-0 m-12">
            <div className="lg:text-[30px] text-[35px] font-bold text-white ">
              {`Restaurant Online Food Ordering`}
            </div>
            <div className="flex flex-col md:w-[650px] w-full">
              <p className="text-white text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum quam leo, lacinia porta tincidunt et, tempus et mi.
                Nullam congue viverra augue, quis tristique felis luctus ut.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:block hidden triangle-red" />
    </div>
  );
}
