import Image from "next/image";

export default function Bannerblock({ block, mediaHandler }) {
  const { title, description, button_label, button_link, mobilebg } =
    block?.main;
  const backgroundImage = mediaHandler["main.image"][0]?.original;

  const highlightDescription = (desc) => {
    if (!desc) return "";
    return desc.replace(
      /\bleading\b/gi, // Match the word "leading" (case insensitive)
      '<span class="text-orange-500">leading</span>'
    );
  };

  return (
    <div className="relative pt-[50px] h-screen ">
      <div className=" w-full  h-screen px-[30px] py-[60px]  md:px-[50px] lg:px-[60px] 2xl:px-[216px] lg:py-[123px] font-jomolhari">
        <div className="hidden sm:block absolute -z-10 top-0 xs:top-50 right-0 lg:right-[150px] 2xl:right-[210px]  h-full w-auto">
          <picture className="  h-full w-full animate-fadeInLeft  ">
            <source media="(min-width: 451px)" srcSet={backgroundImage} />
            <source media="(max-width: 912px)" srcSet={backgroundImage} />
            <Image
              src={backgroundImage}
              height={912}
              width={1080}
              className=" h-full w-full object-cover "
              alt="Banner"
              loading="eager"
            />
          </picture>
        </div>
        <div className="absolute top-0 left-0 -z-10 sm:hidden w-full h-screen">
          <Image
            src={mobilebg}
            height={926}
            width={640}
            alt="mobile_bg"
            className="h-full w-full object-cover"
          />
        </div>

        <div
        //   className=" bg-black grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-none
        //  "
        >
          {/* first */}
          <div className="w-[300px] md:w-[600px] lg:w-[819px]  pt-[35px] space-y-[20px] md:space-y-[40px] lg:space-y-[57px] text-[#004E98] flex justify-center flex-col animate-fadeInLeft ">
            <div className="">
              <div className=" leading-[40px] lg:leading-[120%] tracking-[3px] text-[25px] md:text-[50px] lg:text-[60px] 2xl:text-[80px] pb-[30px] ">
                {title}
              </div>
              <div>
                <h2
                  className="  max-w-[750px] text-[13px] md:text-[20px] lg:text-[25px] 2xl:text-[40px] tracking-[10px] leading-[150%]"
                  dangerouslySetInnerHTML={{
                    __html: highlightDescription(description),
                  }}
                />
              </div>
            </div>

            <div className="">
              <a href={button_link} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center w-[120px] h-[40px] md:w-[160px]  px-[10px] md:px-[20px] lg:px-[30px] lg:w-[237px] lg:h-[62px] rounded-md shadow-2xl bg-[#3A6EA5] border-2 hover:border-[#3A6EA5]  transition-all duration-300">
                  <Image
                    src="/images/email.jpeg"
                    width={20}
                    height={10}
                    alt="email"
                    loading="lazy"
                    className="lg:w-[30px] "
                  />
                  <h1 className="text-[#EFEFEF] px-[5px] md:px-[15px] text-xs lg:text-lg 2xl:text-xl tracking-wide uppercase">
                    {button_label}
                  </h1>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
