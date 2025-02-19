import React from "react";
import Image from "next/image";

const Saas = ({ block }) => {
  console.log("e", block?.main?.information);

  return (
    <div className="relative w-full px-[30px] py-[60px] h-full  2xl:px-[216px] lg:py-[114px] font-jomolhari">
      <div className="">
        {block?.main?.information.map((item, index) => (
          <div key={index} className="w-full ">
            <div
              className={`flex flex-col items-center md:flex-row lg:py-[100px] ${
                item.position === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="  w-full md:w-1/2 text-center md:text-left md:py-[100px] ">
                <div className="text-[20px]  lg:text-[30px] xl:text-[40px]   font-bold py-[10px]">
                  {item?.title}
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                  className="xl:text-[25px] "
                ></div>
              </div>

              {/* Responsive Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={item?.image}
                  width={300}
                  height={200}
                  alt="saas_images"
                  className="lg:w-[554px] lg:h-[365px] "
                />
              </div>
            </div>

            {/* Border Divider */}
            <div className="  h-[1px] border border-[rgba(36,80,175,0.15)] shadow-[1px_0px_4px_rgba(0,0,0,0.25)] my-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saas;
