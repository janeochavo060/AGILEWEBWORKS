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
      className="w-full px-[25px] 2xl:px-[137px] py-[80px] lg:py-[114px] h-full font-jomolhari text-black "
      style={{
        background: "linear-gradient(to right, #FF924B, #D25707)",
      }}
    >
      <div className="">
        {/* Footer Description with Call Image */}
        <div className="tracking-[4px] lg:text-[30px] lg:tracking-[6px] flex flex-col md:flex-row items-center justify-center text-center">
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
        <div className="flex ">
          {/* Logo */}
          <div className="w-[400px]">
            <Image src={logo} width={206} height={76} alt="logo" />

            {/* Copyright Section */}
            <div className="text-[10px] lg:text-[20px] mt-[10px] flex items-center justify-center  ">
              Copyright
              <Image
                src="/images/copyright.jpg"
                width={20.25}
                height={18.75}
                alt="copyright_logo"
                className="ml-2"
              />
              <span className="w-full">{copyright}</span>
            </div>
          </div>

          {/* Footer Links and Descriptions */}
          <div className="2xl:ml-[300px] pt-4 flex flex-col lg:flex-row  lg:gap-[50px] ">
            {/* Titles and Descriptions */}
            {title?.map(({ title }, index) => (
              <div key={index} className="flex flex-col mb-4">
                {/* Title */}
                <span className="font-bold  lg:text-[27px]">{title}</span>

                {/* Corresponding Description */}
                {descriptions?.[index] && (
                  <span
                    className="lg:text-[20px] leading-relaxed"
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
