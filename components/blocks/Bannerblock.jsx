import Image from "next/image";

export default function Bannerblock({ block, mediaHandler }) {
  const { title, description, button_label, button_link } = block?.main;

  // Highlight "leading" in the description
  const highlightDescription = (desc) => {
    if (!desc) return "";
    return desc.replace(
      /\bleading\b/gi, // Match the word "leading" (case insensitive)
      '<span class="text-orange-500">leading</span>'
    );
  };

  return (
    <div className="relative pt-[30px]">
      <div className="w-full h-[1028px] px-[30px] py-[60px]  md:px-[50px] lg:px-[60px] 2xl:px-[137px] lg:py-[123px] font-jomolhari">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-none ">
          {/* first */}
          <div className=" space-y-[35px] lg:space-y-[57px] text-[#004E98] flex justify-center flex-col">
            <div className="leading-[70px] text-[50px] 2xl:text-[70px] md:text-[60px] w-[500px] lg:w-[700px] ">
              {title}
            </div>
            <div>
              <h2
                className=" text-[25px] lg:text-[30px] 2xl:text-[25px] tracking-[10px] leading-[150%]"
                dangerouslySetInnerHTML={{
                  __html: highlightDescription(description),
                }}
              />
            </div>

            <div className="">
              <button
                className=" flex items-center  w-[200px] h-[50px] px-[30px] lg:w-[237px] lg:h-[62px]  lg:text-2xl   bg-[#3A6EA5] rounded-md shadow-2xl"
                style={{
                  boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Image src="/images/email.jpeg" width={30} height={10} />
                <h1 className="text-[#EFEFEF] px-[15px] tracking-wide">
                  Email Us
                </h1>
              </button>
            </div>
          </div>
          {/* second */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className=" w-[400px] h-[400px] lg:w-[526px] 2xl:h-[569px]">
              <Image
                src={mediaHandler["main.image"][0]?.original}
                width={100}
                height={100}
                alt="banner_image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
