import React from "react";
import Image from "next/image";

const SecondPageDrupal = ({ block }) => {
  console.log("e", block?.main?.information);
  return (
    <div className="px-[30px]  py-[60px] h-full 2xl:px-[216px] lg:py-[114px] font-jomolhari bg-[rgba(75,135,192,0.78)] text-[#00000]">
      <div className="space-y-[77px]">
        {block?.main?.information.map((item, index) => (
          <div key={index} className="flex w-full border rounded-[70px] bg-[rgba(217,217,217,0.10)] backdrop-blur-[35px]">
            <div
              className={`flex flex-col items-center md:flex-row lg:py-[70px] lg:px-[105px] ${
                item.position === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div>
                <div className="text-[40px] py-[20px]">{item.title}</div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="text-[28px]"
                ></div>
              </div>

              <div>
                <Image
                  src={item.image}
                  width={980}
                  height={448}
                  alt="drupal_icon_images"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPageDrupal;
