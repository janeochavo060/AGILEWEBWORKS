import Image from "next/image";

export default function Bannerblock({ block, mediaHandler }) {
  const { title, description, button_label, button_link } = block?.main;
  const backgroundImage = mediaHandler["main.image"][0]?.original;
  // Highlight "leading" in the description
  const highlightDescription = (desc) => {
    if (!desc) return "";
    return desc.replace(
      /\bleading\b/gi, // Match the word "leading" (case insensitive)
      '<span class="text-orange-500">leading</span>'
    );
  };

  return (
    <div className="relative pt-[30px] ">
      <div className=" w-full  lg:h-[1080px] h-[600px] px-[30px] py-[60px]  md:px-[50px] lg:px-[60px] 2xl:px-[216px] lg:py-[123px] font-jomolhari">
        <div className="absolute -z-10 top-0 xs:top-50 sm:right-[40px] md:right-[90px]  lg:right-[150px] 2xl:right-[210px]  h-full w-auto">
          <picture className="  h-full w-full animate-fadeInLeft ">
            <source media="(min-width: 451px)" srcSet={backgroundImage} />
            <source media="(max-width: 912px)" srcSet={backgroundImage} />
            <Image
              src={backgroundImage}
              height={912}
              width={1080}
              className=" h-full w-full object-cover "
              alt="Banner"
              loading="lazy"
            />
          </picture>
        </div>
        <div
        //   className=" bg-black grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-none
        //  "
        >
          {/* first */}
          <div className="w-[300px] lg:w-[819px]  pt-[35px] space-y-[20px] lg:space-y-[57px] text-[#004E98] flex justify-center flex-col animate-fadeInLeft ">
            <div className="leading-[50px] lg:leading-[120%] tracking-[3px] text-[30px] md:text-[40px] lg:text-[60px] 2xl:text-[80px]  ">
              {title}
            </div>
            <div>
              <h2
                className="  max-w-[650px] text-[15px] lg:text-[25px] 2xl:text-[40px] tracking-[10px] leading-[150%]"
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
                <Image
                  src="/images/email.jpeg"
                  width={30}
                  height={10}
                  alt="email"
                  loading="lazy"
                />
                <h1 className="text-[#EFEFEF] px-[15px] tracking-wide">
                  Email Us
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
