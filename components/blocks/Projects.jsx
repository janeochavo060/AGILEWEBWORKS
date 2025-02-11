import React from "react";
import Image from "next/image";

const Projects = ({ block, mediaHandler }) => {
  console.log("e", block?.project?.client);

  return (
    <div className="w-full px-[30px] py-[60px] md:px-[50px] lg:px-[60px] 2xl:px-[216px] lg:py-[123px] font-jomolhari">
      <div
        className="text-center font-bold text-[#004E98] py-[20px]  text-stroke-1-black  xs:text-[30px] md:text-[44px] lg:text-[54px] 2xl:text-[64px]  tracking-[19px]   lg:leading-[151px]  capitalize "
        style={{
          textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
          height: "100%",
        }}
      >
        {block?.project?.title}
      </div>
      <div className="flex flex-col gap-6">
        {block?.project?.client?.map((item, index) => (
          <div key={index} className=" ">
            {/* Long Width Desktop Image with Hover Description */}
            <div className="relative mb-4 group ">
              <Image
                src={
                  mediaHandler[`project.client.${index}.image`]?.[0]
                    ?.conversions.Image ||
                  mediaHandler[`project.client.${index}.image`]?.[0]?.original
                }
                width={1271}
                height={428}
                alt="client"
                className="lg:w-full lg:h-full rounded-[3px] lg:rounded-[31px] object-fill"
              />
              <div className="absolute inset-0 bg-black/60 text-orange-500 rounded-[3px] lg:rounded-[31px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center   text-[12px]  md:text-[20px] lg:text-[30px] 2xl:text-[50px]">
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </div>

            {/* Next 3 Mobile Images with Hover Descriptions */}
            <div className="grid grid-cols-3  gap-4">
              {block?.project?.clientmobile
                ?.slice(index * 3, index * 3 + 3) // Ensures grouping of 3 images per long-width image
                .map((mobileItem, mobileIndex) => (
                  <div key={mobileIndex} className="relative group">
                    <Image
                      src={
                        mediaHandler[
                          `project.clientmobile.${
                            index * 3 + mobileIndex
                          }.image`
                        ]?.[0]?.conversions.Image ||
                        mediaHandler[
                          `project.clientmobile.${
                            index * 3 + mobileIndex
                          }.image`
                        ]?.[0]?.original
                      }
                      width={407}
                      height={605}
                      alt="clientmobile"
                      className="w-full rounded-[3px] lg:rounded-[31px]  "
                    />
                    <div className="absolute inset-0 bg-black/60 rounded-[3px]  lg:rounded-[31px]  text-orange-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center  text-[12px]  md:text-[20px] lg:text-[30px] 2xl:text-[50px]">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: mobileItem.description,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
