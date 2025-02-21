import React from "react";
import Image from "next/image";

const WebsiteFeatures = ({ block, mediaHandler }) => {
  console.log("e", block?.website_features);

  return (
    <>
      <div className=" relative   px-[30px] py-[60px] h-full 2xl:px-[216px] lg:py-[114px] font-jomolhari">
        {/* Space applied only to parent div */}
        <div className="flex flex-col xl:flex-row justify-items-center space-y-[30px] xl:space-y-0 ">
          {block?.website_features?.image_loadingspeed?.map((item, index) => (
            <div className="space-y-[20px] " key={index}>
              <div className="flex justify-center items-center">
                {mediaHandler?.["website_features.image_loadingspeed"]?.[index]
                  ?.original && (
                  <Image
                    src={
                      mediaHandler["website_features.image_loadingspeed"]?.[
                        index
                      ].original
                    }
                    width={768}
                    height={375}
                    alt="Feature Image"
                    className=""
                  />
                )}
              </div>

              <div className="space-y-[20px] flex flex-col items-center text-center">
                <div className="tracking-[8px] 2xl:tracking-[15px] text-[18px] md:text-[25px]  2xl:text-[30px] ">
                  {block?.website_features?.title}
                </div>
                <div className="bg-[#BEBEBE]/10 px-[32px] py-[10px] rounded-[16px]">
                  <div
                    className=" max-w-[759px]  text-[15px] lg:text-[20px] 2xl:text-[25px]  2xl:leading-[170%] tracking-[1px]"
                    dangerouslySetInnerHTML={{
                      __html: block?.website_features?.description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
          <div className="xl:grow flex items-center justify-center">
            <div className="w-full xl:w-[200px] grid grid-cols-2  sm:grid-cols-4  xl:grid-cols-1 gap-10 border rounded-[50px] shadow-[11px_20px_35px_rgba(0,0,0,0.25)]  p-[25px] justify-center items-center ">
              {block?.website_features?.specification?.map((item, index) => (
                <div
                  key={index}
                  className="  rounded-lg text-center flex  flex-col items-center justify-center"
                >
                  <div className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-bold border-4  border-[#00DB00] text-[#00DB00]  w-16 xl:w-20 2xl:w-24  h-16 xl:h-20 2xl:h-24  flex   items-center justify-center rounded-full shadow-[5px_6px_4px_rgba(0,0,0,0.25)] ">
                    {item?.rating}
                  </div>
                  <div className="pt-[10px] text-[12px]  xl:text-[14px] 2xl:text-[16px] ">
                    {item?.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteFeatures;
