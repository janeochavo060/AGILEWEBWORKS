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
    <div className="relative">
      <div className="w-full h-[1020px] px-[137px] py-[123px] font-jomolhari">
        <div className="grid grid-cols-2 ">
          {/* first */}
          <div className=" space-y-[57px] text-[#004E98] mt-[50px] ">
            <div className=" w-[500px] leading-[50px] text-[50px]">{title}</div>
            <div>
              <h2
                className="w-[670px] text-[25px] tracking-[10px] leading-[150%]"
                dangerouslySetInnerHTML={{
                  __html: highlightDescription(description),
                }}
              />
            </div>

            <div className="">
              <button
                className=" flex items-center w-[237px] h-[62px] p-[15px] px-[30px] text-2xl bg-[#3A6EA5] rounded-md shadow-2xl
"
              >
                <Image src="/images/email.jpeg" width={33} height={28} />
                <h1 className="text-[#EFEFEF] px-[15px] tracking-wide">
                  Email Us
                </h1>
              </button>
            </div>
          </div>
          {/* second */}
          <div className="flex items-center justify-end">
            <div>
              <Image
                src={mediaHandler["main.image"][0]?.original}
                width={100}
                height={100}
                alt="banner_image"
                className="w-[526px] h-[569px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
