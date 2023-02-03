import React from "react";
import Image from "next/image";
export default function SingleImageText({ slice }) {
  // SINGLE IMAGE WITH TEXT BLOCK
  console.log(slice)

  const getClass = (data) => {
    const main = slice?.main
    if (main) {
      if (data === 'image') {
        switch (main?.image_division) {
          case '1/2': return 'lg:min-h-[460px] lg:min-w-[460px]'
          case '1/4': return 'lg:min-h-[460px] lg:min-w-[460px]'
          case '3/4': return 'lg:min-h-[460px] lg:min-w-[460px]'
        }
      } else {
        switch (main?.image_division) {
          case '1/2': return 'lg:min-h-[460px] lg:min-w-[460px]'
          case '1/4': return 'lg:min-h-[460px] lg:min-w-[460px]'
          case '3/4': return 'lg:min-h-[460px] lg:min-w-[460px]'
        }
      }
    }
  }

  return (
    <div className="trapezoid-right">
      <div className="w-[95%] md:w-full my-8 max-w-screen-xl mx-auto pr-[7%] 2xl:pr-0">
        <div className="flex flex-col lg:flex-row items-center gap-4 xl:gap-16 max-w-screen-xl ml-auto p-4 md:py-8">
          <Image
            alt=""
            blurDataURL={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
            src={`https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/${slice?.main?.image}`}
            width={460}
            height={460}
            className={`w-full rounded-r-xxl rounded-bl-xxl object-cover ${getClass('image')}`}
          />
          <div className={`${getClass('content')}`}>
            <h2>
              {slice?.main?.title || ""} 
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: slice?.main?.content || "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
