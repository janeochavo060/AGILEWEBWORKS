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
      <div key={index} className="flex justify-start text-[30px]">
        {sentence.trim() && (
          <div dangerouslySetInnerHTML={{ __html: sentence + "." }} />
        )}
      </div>
    );
  });

  return (
    <div className="relative">
      <div className="space-y-[50px] pt-[100px] w-full h-[1028px] relative px-[30px] py-[60px] lg:px-[137px] lg:py-[114px] font-jomolhari bg-[linear-gradient(to_bottom,#004E98,#8CAAC6,#FFFFFF)]">
      
        <div className="flex space-x-[10px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="82"
              fill="black"
              opacity="0.5"
            >
              <path d="M4.7 17.7c-1-1.1-1.6-2.3-1.6-4.3 0-3.5 2.5-6.6 6-8.2l.9 1.3c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.9-.3 1.8.2 3.2 1.6 3.2 3.5 0 .9-.4 1.8-1 2.5-.7.7-1.5 1-2.5 1-1.1 0-2.1-.5-2.7-1.1zm10 0c-1-1.1-1.6-2.3-1.6-4.3 0-3.5 2.5-6.6 6-8.2l.9 1.3c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.9-.3 1.8.2 3.2 1.6 3.2 3.5 0 .9-.4 1.8-1 2.5s-1.5 1-2.5 1c-1.1 0-2.1-.5-2.7-1.1z" />
            </svg>
          </div>
          <div className="text-center pt-[30px] ">{rows}</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="82"
              fill="black"
              opacity="0.5"
              className="mt-[90px]"
            >
              <path d="M19.3 6.3c1 1.1 1.6 2.3 1.6 4.3 0 3.5-2.5 6.6-6 8.2l-.9-1.3c3.3-1.8 4-4.1 4.2-5.6-.5.3-1.2.4-1.9.3-1.8-.2-3.2-1.6-3.2-3.5 0-.9.4-1.8 1-2.5.7-.7 1.5-1 2.5-1 1.1 0 2.1.5 2.7 1.1zm-10 0c1 1.1 1.6 2.3 1.6 4.3 0 3.5-2.5 6.6-6 8.2L4 17.5c3.3-1.8 4-4.1 4.2-5.6-.5.3-1.2.4-1.9.3-1.8-.2-3.2-1.7-3.2-3.5 0-.9.4-1.8 1-2.5.7-.7 1.5-1 2.5-1 1.1 0 2.1.5 2.7 1.1z" />
            </svg>
          </div>
          {/* <div className=" absolute top-[100px] right-[20px] ">
            <Image
              src="/images/desktopmockups.jpg"
              width={200}
              height={60}
              alt="desktopmockups"
            />
          </div> */}
        </div>
        
        <div className="justify-center text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/iphonerobot.jpeg"
                width={350}
                height={60}
                alt="iphonerobot"
                className="inset-y-0 left-0"
              />
              <div className="">
                <div
                  dangerouslySetInnerHTML={{
                    __html: block?.description?.description,
                  }}
                />
                <span className="text-blue-500">
                  {block?.url?.description_url}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
