import React from "react";
import Image from "next/image";

const CaseStudies = ({ block }) => {
  console.log("e", block?.casestudies?.specification);
  return (
    <div className=" relative w-full px-[30px] py-[60px] h-full lg:px-[137px] 2xl:px-[216px] lg:py-[114px] font-jomolhari">
      <div className="grid grid-cols-2">
        <div>
          <div className="">{block?.casestudies?.title}</div>
          {block?.casestudies?.specification.map((item, index) => (
            <>
              <div key={index}>
                <div>{item.rating}</div>
                <div>{item.title}</div>
              </div>
            </>
          ))}
        </div>
        <div>
          <Image
            src={block?.casestudies?.image}
            width={673.07}
            height={367}
            alt="mobile_desktop"
            loading="lazy"
          />
        </div>
      </div>
      <div>{block?.casestudies?.subheading}</div>
      <div
        dangerouslySetInnerHTML={{ __html: block?.casestudies?.description }}
      ></div>
    </div>
  );
};

export default CaseStudies;
