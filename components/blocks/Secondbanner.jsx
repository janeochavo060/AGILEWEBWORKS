import Link from "next/link";
import React from "react";
import Image from "next/image";
const Secondbanner = ({ block, mediaHandler }) => {
  return (
    <>
      <div className="relative border">
        <div className="w-full  h-[1020px] px-[137px] py-[114px] font-jomolhari text-[#004E98]">
          <div className="grid grid-cols-2">
            {/* <div>
       
        {block?.main?.content?.map((item, index) => {
          return (
            <>
              <div>{console.log("e", item?.description)}</div>
            </>
          );
        })}
      </div> */}

            <div className="mt-[121px] border">
              {mediaHandler["main.image"].map((item, index) => {
                return (
                  <>
                    <div>{console.log("item", item?.original)}</div>
                    <Image
                      src={item?.original}
                      width={669}
                      height={512}
                      alt="website_image"
                    />
                  </>
                );
              })}
            </div>

            <div>
              <div className="tracking-[20px] text-[35px] text-stroke-1-black ">
                {block?.main?.title}
              </div>
              <div className="mt-[68px] tracking-[1px] text-[20px]">
                {block?.main?.content?.map((item, index) => {
                  return (
                    <>
                      <div>
                        <div 
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        />
                      </div>
                    </>
                  );
                })}
              </div>

              {/* <div>{console.log("e", block?.main?.button_link)}</div> */}

              <Link href={block?.main?.button_link}>Explore more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Secondbanner;
