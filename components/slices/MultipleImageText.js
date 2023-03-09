import Image from "next/image";
import TitleContentBlock from "@/components/partials/TitleContentBlock";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function MultipleImageText({ slice }) {
  const router = useRouter();
  const images = slice?.main?.images || [];
  // MULTIPLE IMAGES WITH TEXT BLOCK ON RIGHT
  return (
    <div
      className={
        `${slice?.main?.bg_color
          ? slice?.main?.image_position === "right"
            ? "trapezoid-bottom-left  md:trapezoid-left md:ml-5 lg:ml-10"
            : "trapezoid-bottom-right  md:trapezoid-right md:mr-5 lg:mr-10"
          : ""}`
      }
      style={{ backgroundColor: slice?.main?.bg_color }}
    >
      <div
        className={`w-full my-8 max-w-screen-xl mx-auto p-3 md:p-5 ${
          slice?.main?.image_position === "left"
            ? ""
            : "  "
        }`}
      >
        <div className="flex flex-col flex-col-reverse pb-20 md:pb-0 md:grid md:grid-cols-2 gap-4 xl:gap-16 ml-auto">
          <div
            className={`grid grid-cols-2 justify-center lg:justify-start gap-4 lg:gap-8 ${
              slice?.main?.image_position === "right"
                ? "lg:pr-6 "
                : "lg:pl-6"
            }`}
          >
            {images.map((image, i) => (
              <Image
                key={i}
                alt=""
                blurDataURL={image}
                src={image}
                width="300"
                height="700"
                className={`w-full rounded-xl lg:rounded-xxl xl:min-h-[450px] w-auto ${
                  i % 2 ? "mt-[100px]" : ""
                }`}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center lg:gap-4 text-white pt-7 md:pt-0 md:max-w-[90%]">
            <TitleContentBlock slice={slice} />
            {slice?.main?.link && (
              <div
                onClick={() => router.push(slice?.main?.link)}
                // href={slice?.main?.link}
                className="text-xs md:text-sm lg:text-base mr-auto flex items-center gap-2 px-4 py-2 transition ease-in-out delay-150 bg-white hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full cursor-pointer"
                style={{ color: slice?.main?.bg_color }}
              >
                <span>Learn More</span>
                <svg
                  width="16"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 12"
                  fill="currentColor"
                >
                  <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
