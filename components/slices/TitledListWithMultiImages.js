import Image from "next/image";
import { useState } from "react";
import laptop from "@/public/images/laptop.png";
export default function TitledListWithMultiImages({ slice }) {
  const [active, setActive] = useState("");
  const stages = slice?.main?.stages || [];
  const stage = stages.find((stage) => stage?.name === active) || stages[0];

  return (
    <div
      style={{ backgroundColor: `${slice?.main?.bg_color || "transparent"}` }}
      id={slice?.id}
    >
      <div className="flex-wrap md:flex-nowrap min-h-0 w-full max-w-screen-xl mx-auto md:pt-20 md:pb-20 pt-12 pb-20 px-8 xxl:px-0 flex flex-col sm:flex-row items-center gap-20 sm:gap-8 border-t-2 border-black/10">
        <div className="order-2 md:order-1 w-full md:w-auto">
          {slice?.main?.title && <h2 className="mb-4">{slice?.main?.title}</h2>}
          {stages && stages.length > 0 && (
            <div
              className="columns-2 md:flex md:flex-col column-2 gap-4 md:gap-8 h-full w-full md:w-1/3"
            >
              {stages.map((item, i) => (
                <button
                  key={item?.name}
                  aria-label={item?.name}
                  className={`mb-[20px] md:mb-0 text-left transition-all md:flex md:flex-row grid items-center gap-x-4 sm:text-2xl text-2xl font-bold`}
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
        <div className="order-1 md:order-2 flex justify-between lg:justify-start md:items-end lg:items-center relative flex-wrap lg:block sm:flex-row md:gap-8 w-full">
          {stage?.mobile_images && stage?.mobile_images.length > 0 && (
            <div className="order-[3] w-[100%] smallerMobile:min-h-[160px] smallmobile:min-h-[180px] sm:min-h-[200px] md:min-h-[350px] min-w-[30%] max-w-[30%] lg:absolute right-0 top-0 lg:min-h-[100%] lg:min-w-[35%] lg:max-w-[30%] float-right flex justify-around gap-4 sm:block relative">
              {stage?.mobile_images.map((image) => {
                if (!image) return <></>
                return (
                  <Image
                    key={image}
                    alt={image}
                    src={image}
                    blurDataURL={image}
                    width="400"
                    height="200"
                    className="w-1/2 w-full max-w-[63%] rounded-xxl absolute last:bottom-0 last:right-0 object-cover object-top max-h-[70%]"
                  />
                )
              })}
            </div>
          )}
          {stage?.title && (
            <h3 className="order-[1] mb-[50px] md:mb-[20px] lg:mb-0 w-[100%] min-w-[100%] lg:min-w-[60%] lg:max-w-[60%] text-2xl lg:text-3xl font-bold text-center md:text-left xl:text-center max-w-2xl mx-auto float-left">
              {stage?.title}
            </h3>
          )}
          {/* DESKTOP IMAGE */}
          {stage?.desktop_image && (
            <div className="order-[2] w-[100%] max-w-[70%] md:max-w-[60%] mt-[50px] relative float-left">
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
                  src={stage?.desktop_image}
                  blurDataURL={stage?.desktop_image}
                  fill
                  className="h-full w-full object-cover bg-white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
