import React, { useState } from "react";
import Image from "next/image";
export default function ListImages({ slice }) {
  const sampleImages = [
    { src: "/mockups/wingzone.jpg" },
    { src: "/mockups/mimosa.jpg" },
    { src: "/mockups/mimosa.jpg" },
    { src: "/mockups/wingzone_mobilea.jpg" },
  ];
  const sampleImages2 = [
    { src: "/mockups/mimosa.jpg" },
    { src: "/mockups/wingzone.jpg" },
    { src: "/mockups/wingzone_mobilea.jpg" },
    { src: "/mockups/mimosa.jpg" },
  ];

  const list = slice?.main?.list || [
    { name: "Software Development", images: sampleImages },
    { name: "SaaS", images: sampleImages2 },
    { name: "Enterprise", images: sampleImages },
    { name: "Apps", images: sampleImages2 },
    { name: "Website", images: sampleImages },
  ];

  const [active, setActive] = useState("Software Development");
  const activeData = list.find((item) => item.name === active);

  const images = activeData?.images || [];

  // TITLE WITH LIST WITH MASONRY IMAGES
  return (
    <div className="bg-gradient-to-br from-sky-700 via-sky-600 to-sky-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-screen-xl mx-auto text-white overflow-hidden my-8">
        <div className="lg:col-span-1 flex flex-col justify-center gap-2 p-8">
          <h2 className="text-3xl font-bold leading-0 mb-4">
            {slice?.main?.title ||
              "Donec quan felis, ultrices pellentesque eu sem."}
          </h2>
          {list.map((item) => (
            <button
              key={item?.name}
              aria-label={item?.name}
              className={`w-full text-left before:border-2 before:w-8 before:px-2 before:rounded-full transition-all ${
                active !== item?.name && "before:border-transparent"
              } flex items-center gap-x-4 text-xl`}
              onClick={() => setActive(item?.name)}
            >
              {item?.name}
            </button>
          ))}
        </div>
        <div className="col-span-2 overflow-hidden">
          <div className="masonry-effect w-[1200px] max-h-[640px] lg:max-h-[480px]">
            {images.map((image, i) => (
              <div key={i} className="h-full w-full masonry-item">
                <Image
                  key={`${i}-${active}`}
                  alt=""
                  blurDataURL={image?.src}
                  src={image?.src}
                  width="500"
                  height="920"
                  className="w-full h-full shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
