import React from "react";
import footerData from "@/lib/preBuildScripts/static/footer.json";
import Image from "next/image";

const Footer = () => {
  // Destructure footer data safely
  const { footer } = footerData?.data || {};
  const { footer_description, logo, title, descriptions, copyright } =
    footer || {};

  return (
    <div
      className="w-full px-[25px] 2xl:px-[216px] py-[40px] lg:py-[114px] h-full font-jomolhari text-black bg-gradient-to-b from-white via-[#F3863C]/70 to-[#F18237] "
      
    >
      <div className="w-full">
        {/* Footer Description with Call Image */}
        <div className="tracking-[4px] md:text-[20px]  xl:text-[35px] 2xl:text-[40px] lg:tracking-[6px] flex flex-col md:flex-row items-center justify-center text-center">
          <span>{footer_description}</span>
          <div className="mt-2 md:mt-0 flex items-center">
            <span>Contact Us</span>
            <Image
              src="/images/call.jpg"
              width={28}
              height={29}
              alt="call"
              className="ml-[5px]"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border border-black mt-[23px]"></div>

        {/* Footer Content */}
        <div className="w-full flex ">
          {/* Logo */}
          <div className="w-[600px]">
            <Image src={logo} width={206} height={76} alt="logo" />

            <div className=" text-[9px] md:text-[12px] lg:text-[17px] 2xl:text-[22px] mt-[10px] flex items-center justify-center  ">
              Copyright
              <Image
                src="/images/copyright.jpg"
                width={27}
                height={23}
                alt="copyright_logo"
                className="ml-2"
              />
              <span className="w-full">{copyright}</span>
            </div>
          </div>

          <div className="w-full 2xl:ml-[169px] pt-[28px] flex flex-col lg:flex-row gap-[20px] 2xl:gap-[40px]  ">
            {/* Titles and Descriptions */}
            {title?.map(({ title }, index) => (
              <div key={index} className="flex flex-col mb-4">
                {/* Title */}
                <span className="font-bold md:text-[25px] lg:text-[30px] 2xl:text-[35px]">{title}</span>

                {descriptions?.[index] && (
                  <span
                    className="md:text-[12px] lg:text-[17px] 2xl:text-[22px] leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: descriptions[index].description,
                    }}
                  ></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
