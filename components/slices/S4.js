import React from "react";
import Image from "next/image";
import TitleContentBlock from "../partials/TitleContentBlock";
export default function S4({
  slice = {
    main: {
      title: "Golf Course Management System",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</p>",
    },
  },
}) {
  const images = slice?.main?.images || [
    {
      url: "/mockups/mimosa.jpg",
    },
    {
      url: "/mockups/golf-app-1.jpg",
    },
  ];

  // MULTIPLE IMAGES WITH TEXT BLOCK ON LEFT

  return (
    <div className="trapezoid-left bg-primary">
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
                src={image?.url}
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

  return (
    // TITLE; DESCRIPTION; IMAGE SHOWCASE WEB AND MOBILE
    <div className="flex my-8 ml-8">
      <div className="md:block hidden triangle-light-blue" />
      <div className="flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0 bg-sky-500 ">
        <div className="flex md:flex-row flex-col justify-between items-center xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full ">
          <div className="flex flex-col justify-center md:w-[400px] w-full items-start md:p-0 p-8">
            <div className="lg:text-[30px] text-[35px] font-bold text-white">
              {slice?.main?.title || `Golf Course Management System`}
            </div>
            <div className="flex flex-col md:w-[450px]">
              <div
                className={`
                  text-white md:text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline
                  `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum quam leo, lacinia porta tincidunt et, tempus et mi.
                Nullam congue viverra augue, quis tristique felis luctus ut.
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:w-[750px] w-full md:h-[600px] h-full">
            <div className="relative md:w-[500px] w-[300px] md:h-[300px] h-[200px] m-4">
              <Image
                src={"/mockups/mimosa.jpg"}
                alt="image"
                className="rounded-[20px] shadow-md"
                fill
              />
            </div>
            <div className="relative md:w-[260px] md:h-[500px] w-[260px] h-[500px] m-4">
              <Image
                src={"/mockups/golf-app-1.jpg"}
                alt="image"
                className="rounded-[20px] shadow-md"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
