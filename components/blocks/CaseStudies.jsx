import React from "react";
import Image from "next/image";

const CaseStudies = ({ block }) => {
  console.log("e", block?.casestudies);

  const highlightDescription = (desc) => {
    if (!desc) return "";
    return desc
      .replace(
        /We build the world's fastest-loading websites with perfect Google Scores\./gi,
        '<span class="text-orange-500 text-[14px] lg:text-[15px] 2xl:text-[17px]">We build the world\'s fastest-loading websites with perfect Google Scores.</span>'
      )
      .replace(
        /(Google Page Speed)/gi,
        '<span class="text-blue-500 underline">$1</span>'
      );
  };

  return (
    <>
      <div className="pt-[50px]">
        <div className="relative w-full px-[30px] py-[60px] h-full lg:px-[137px] 2xl:px-[216px] lg:py-[114px]  font-jomolhari bg-gradient-to-b from-[rgba(0,47,108,0.21)] to-[rgba(255,103,0,0.21)]">
          <div className="pt-[20px] grid lg:grid-cols-2 grid-cols-1">
            <div>
              <div className=" text-[17px] md:text-[20px] lg:text-[26px] text-center lg:text-left 2xl:text-[36px] pb-[40px] text-[#1D1D1D]">
                {block?.casestudies?.title}
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-4 items-center pb-[40px]">
                {block?.casestudies?.specification.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-sm lg:text-lg 2xl:text-xl font-bold border-2 border-[#00DB00] text-[#00DB00] w-10 lg:w-14 2xl:w-16 h-10 lg:h-14 2xl:h-16 flex items-center justify-center rounded-full shadow-[3px_4px_3px_rgba(0,0,0,0.25)]">
                      {item.rating}
                    </div>
                    <div className="pt-[10px] text-[10px] uppercase xl:text-[12px] 2xl:text-[14px]">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="w-[485px] border-2 border-[#A9A9A9] py-[5px] lg:py-[10px] px-[10px] lg:px-[20px] rounded-[10px]">
                  <div className="flex  justify-between">
                    <div>
                      <h1 className="font-jost text-[13px] lg:text-[16px] 2xl:text-[20px] tracking-[2px] font-bold">
                        <strong>Speed:</strong>
                      </h1>
                    </div>
                    <div className="flex">
                      <Image
                        src="/images/mobile.jpg"
                        width={20}
                        height={10}
                        alt="mobile_icon"
                      />
                      <h3 className="px-[5px] text-[13px] xl:text-[16px]">
                        Mobile
                      </h3>
                      <span className="text-[#002F6C] font-angkor pt-[3px] text-[10px] xl:text-[16px]">
                        <strong> 1.3 secs</strong>
                      </span>
                    </div>
                    <div className="flex">
                      <Image
                        src="/images/desktopicon.jpg"
                        width={20}
                        height={10}
                        alt="desktop_icon"
                      />
                      <h3 className="px-[5px] text-[13px] xl:text-[16px] ">
                        Desktop
                      </h3>
                      <span className="text-[#002F6C] font-angkor pt-[3px] text-[10px] xl:text-[16px]">
                        <strong> 0.6 secs</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center pt-[20px]">
                <Image
                  src={block?.casestudies?.image}
                  width={673.07}
                  height={367}
                  alt="mobile_desktop"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-[72px] font-jomolhari w-full px-[30px] py-[60px] h-full lg:px-[137px] 2xl:px-[216px] lg:py-[114px] ">
        <div className="border bg-[#315BB6]/10 rounded-[13px] p-[40px] text-center ">
          <div className=" justify-center max-w-[580px] ">
            <div className=" text-[16px] lg:text-[20px] 2xl:text-[24px] pb-[10px]">
              <strong>{block?.casestudies?.subheading}</strong>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: highlightDescription(block?.casestudies?.description),
              }}
              className="text-[12px] lg:text-[13px] 2xl:text-[15px]"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
