import React from "react";
import Image from "next/image";
const Website = ({ block }) => {
  // Replace the highlighted words dynamically using a regex
  const highlightedText = block?.web_banner?.web_quotes?.replace(
    /(craft|command|flexibility|&|flex)/gi,
    '<span class="text-orange-500 font-bold">$1</span>'
  );

  // Split the string by periods or any other separators you wish to create rows
  const rows = highlightedText?.split(".").map((sentence, index) => {
    return (
      <div
        key={index}
        className="flex justify-start text-left text-[23px]  md:text-[30px] lg:text-[35px]  2xl:text-[50px]  lg:leading-[150%]"
      >
        {sentence.trim() && (
          <div dangerouslySetInnerHTML={{ __html: sentence + "." }} />
        )}
      </div>
    );
  });

  return (
    <div className="pt-[100px] w-full relative   px-[30px] py-[60px] h-full 2xl:px-[216px] lg:py-[114px] font-jomolhari bg-[linear-gradient(to_bottom,#004E98,#8CAAC6,#FFFFFF)]">
      <div className="flex space-x-[10px]">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="82"
            fill="black"
            opacity="0.5"
            className="md:w-[40px] lg:w-[60px] xl:w-[68px] md:h-[35px] lg:h-[50px] xl:h-[82px]  "
          >
            <path d="M4.7 17.7c-1-1.1-1.6-2.3-1.6-4.3 0-3.5 2.5-6.6 6-8.2l.9 1.3c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.9-.3 1.8.2 3.2 1.6 3.2 3.5 0 .9-.4 1.8-1 2.5-.7.7-1.5 1-2.5 1-1.1 0-2.1-.5-2.7-1.1zm10 0c-1-1.1-1.6-2.3-1.6-4.3 0-3.5 2.5-6.6 6-8.2l.9 1.3c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.9-.3 1.8.2 3.2 1.6 3.2 3.5 0 .9-.4 1.8-1 2.5s-1.5 1-2.5 1c-1.1 0-2.1-.5-2.7-1.1z" />
          </svg>
        </div>
        <div className="lg:py-[50px] text-center pt-[30px]  ">{rows}</div>

        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="82"
            fill="black"
            opacity="0.5"
            className="mt-[110px]  md:w-[40px] lg:w-[60px] xl:w-[80px] md:h-[60px] lg:h-[80px] xl:h-[100px]"
          >
            <path d="M19.3 6.3c1 1.1 1.6 2.3 1.6 4.3 0 3.5-2.5 6.6-6 8.2l-.9-1.3c3.3-1.8 4-4.1 4.2-5.6-.5.3-1.2.4-1.9.3-1.8-.2-3.2-1.6-3.2-3.5 0-.9.4-1.8 1-2.5.7-.7 1.5-1 2.5-1 1.1 0 2.1.5 2.7 1.1zm-10 0c1 1.1 1.6 2.3 1.6 4.3 0 3.5-2.5 6.6-6 8.2L4 17.5c3.3-1.8 4-4.1 4.2-5.6-.5.3-1.2.4-1.9.3-1.8-.2-3.2-1.7-3.2-3.5 0-.9.4-1.8 1-2.5.7-.7 1.5-1 2.5-1 1.1 0 2.1.5 2.7 1.1z" />
          </svg>
        </div>
        <Image
          src="/images/desktopmockups.jpg"
          width={495}
          height={426}
          alt="desktopmockups"
          className="pt-[20px] hidden lg:block"
        />
      </div>

      <div className="flex justify-center">
        <Image
          src="/images/desktopmockups.jpg"
          width={200}
          height={60}
          alt="desktopmockups"
          className="pt-[20px] lg:hidden"
        />
        <Image
          src="/images/iphonerobot.jpeg"
          width={150}
          height={60}
          alt="iphonerobot"
          className="lg:hidden"
        />
      </div>

      <div className="flex text-center h-full ">
        <Image
          src="/images/iphonerobot.jpeg"
          alt="iphonerobot"
          width={630}
          height={800}
          className="hidden lg:block "
        />
        <div
          className="xl:pr-[100px] text-center pt-[60px] flex-col items-center text-[12px] md:text-[15px] lg:text-[20px] 2xl:text-[25px]"
          dangerouslySetInnerHTML={{
            __html: `${block?.description?.description} <span class="text-blue-500">${block?.url?.description_url}</span>`,
          }}
        />
      </div>
    </div>
  );
};

export default Website;
