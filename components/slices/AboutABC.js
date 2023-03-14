import Image from "next/image";
import Link from "next/link";

export default function Slice({ slice }) {
  // console.log(slice, "asasas");
  const {
    image,
    image_position,
    stretch_image = false,
    title = "",
    content,
    button_label,
    button_link,
    redirection,
    background_color,
  } = slice?.main;

  const convertion = stretch_image ? {} : { width: 300, height: 0 }

  return (
    <div
      className={`px-4 w-full xl:flex xl:justify-center py-8`}
      style={{
        background: `linear-gradient(to bottom, ${
          background_color || "#FFFFFF"
        }, rgba(255, 255, 255, 0.1))`,
      }}
    >
      <div className="xl:w-[1345px] pt-4">
        <div className="flex flex-wrap justify-center">
          <div
            className={`xl:w-1/3 order-1 ${
              image_position === "right" ? "xl:order-2 flex justify-end" : ""
            }`}
          >
            <div
              className={`${
                stretch_image
                  ? "relative h-[350px] sm:h-[400px] md:h-[600px] lg:h-[500px] xl:h-[390px]"
                  : "flex flex-col justify-center h-[100%] mt-[-40px]"
              } relative w-[350px] sm:w-[400px] md:w-[600px] lg:w-[500px] xl:w-[390px]`}
            >
              <Image
                className={`m-auto ${stretch_image && 'object-contain object-center rounded-2xl'}`}
                src={image}
                alt={title}
                {...convertion}
                fill={stretch_image}
              />
            </div>
          </div>

          <div
            className={`xl:w-2/3 order-2 ${
              image_position === "right" ? "xl:order-1" : ""
            }`}
          >
            <p className="text-main-black text-center xl:text-left my-2 mb-6 font-extrabold text-[31px] sm:text-xl md:text-2xl xl:text-3xl">
              {title}
            </p>

            <div
              className="text-sm xl:text-base xl:font-medium text-[#636363] text-center xl:text-left mb-8"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>

            {button_link && (
              <Link
                href={button_link}
                className="bg-[#034F8B] text-[12px] leading-[15px] font-bold py-[8px] px-[29px] text-white rounded-[4px] h-[31px]"
              >
                {button_label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
