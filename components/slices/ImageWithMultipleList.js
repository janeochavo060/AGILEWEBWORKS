import Image from "next/image"
import React from "react"

export default function ImageWithMultipleList({ slice }) {
  const list = slice?.main?.list || []

  return (
    <div
      id={slice?.id}
      style={{ backgroundColor: `${slice?.main?.bg_color || "transparent"}` }}
      className="px-8 xxl:px-0"
    >
      <div className="w-full max-w-screen-xl mx-auto md:columns-2 gap-8 py-6 md:py-16">
        <Image
          alt=""
          src={slice?.main?.image}
          blurDataURL={slice?.main?.image}
          width={460}
          height={460}
          className="h-full w-full rounded-r-xxl rounded-bl-xxl aspect-auto object-cover mx-auto"
        />
        <div className="lg:col-span-2 space-y-8 md:mt-0 my-5">
          {list.map((item, i) => {
            const innerList = item?.list || []
            return (
              <div key={i} className="space-y-4">
                <h1 className="font-bold md:text-4xl sm:text-4xl smallerMobile:text-3xl text-2xl post-title mb-[20px]">
                  {item?.title}
                </h1>
                {innerList.map((innerItem, index) => {
                  return (
                    <div
                      key={i.toString() + index}
                      className="flex items-center gap-2 lg:text-lg md:text-md text-sm post-description"
                    >
                      <span
                        // className="unreset"
                        dangerouslySetInnerHTML={{
                          __html: item?.bullet_icon,
                        }}
                      />
                      <div
                        // className="unreset"
                        dangerouslySetInnerHTML={{ __html: innerItem?.content }}
                      />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
