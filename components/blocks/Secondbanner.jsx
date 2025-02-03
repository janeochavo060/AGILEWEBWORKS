import Link from "next/link";
import React from "react";
import Image from "next/image";
const Secondbanner = ({ block, mediaHandler }) => {
  return (
    <div className=" relative w-full px-[30px] py-[60px] h-full lg:px-[137px] lg:py-[114px] font-jomolhari text-[#004E98]">
      <div className="lg:grid grid-cols-2 ">
        {/* <div>
                
                  {block?.main?.content?.map((item, index) => {
                    return (
                      <>
                        <div>{console.log("e", item?.description)}</div>
                      </>
                    );
                  })}
                </div> */}
        <div
          className="text-center block lg:hidden tracking-[20px] text-[23px] lg:text-[35px] text-stroke-1-black lg:ml-[30px]"
          style={{
            textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            height: "100%", // Ensure it fills the parent height
          }}
        >
          {block?.main?.title}
        </div>

        <div className=" pt-[20px] md:pt-[50px] ">
          {mediaHandler["main.image"].map((item, index) => {
            return (
              <>
                <Image
                  src={item?.original}
                  width={900}
                  height={512}
                  alt="website_image"
                />
              </>
            );
          })}
        </div>

        <div className="">
          <div
            className="hidden lg:block tracking-[20px] 2xl:text-[35px] md:text-[25px]   text-stroke-1-black text-center "
            style={{
              textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            {block?.main?.title}
          </div>
          <div className="pt-[10px] lg:pt-[68px] tracking-[1px] text-[15px] 2xl:text-[20px]">
            {block?.main?.content?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-start mb-[10px] 2xl:mb-[30px] 2xl:ml-[150px]" // Ensure alignment to the top of the text
                >
                  {/* Icon */}
                  <img
                    src="/images/bullet.jpg"
                    alt="bullet"
                    width={27}
                    height={26}
                    className="mr-[10px] mt-[3px]" // Fine-tune alignment with the text
                  />
                  {/* Text Content */}
                  <div
                    className="w-full text-justify"
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* <div>{console.log("e", block?.main?.button_link)}</div> */}
          <div className=" flex justify-center w-full mt-[20px]">
            <div className="w-[200px] h-[40px] 2xl:w-[317px] 2xl:h-[57px]"> 
              <Link
                href={block?.main?.button_link}
                className="flex items-center justify-center w-full h-full bg-[#FF6700] text-[#000000] font-josefin 2xl:text-[28px] rounded-[11px]"
              >
                EXPLORE MORE
                <img
                  src="/images/arrow.jpg"
                  alt="arrow"
                  width={44.96}
                  height={27.37}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondbanner;
