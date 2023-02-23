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
        slice?.main?.bg_color
          ? slice?.main?.image_position === "right"
            ? "trapezoid-left"
            : "trapezoid-right"
          : ""
      }
      style={{ backgroundColor: slice?.main?.bg_color }}
    >
      <div
        className={`w-[95%] md:w-full my-8 max-w-screen-xl mx-auto ${
          slice?.main?.image_position === "left"
            ? "pr-[7%] 2xl:pr-0"
            : "pl-[7%] 2xl:pl-0  "
        }`}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-16 max-w-screen-xl ml-auto p-4 xl:p-0">
          <div
            className={`flex flex-col sm:flex-row justify-center xl:justify-start sm:gap-8 xxl:p-0 ${
              slice?.main?.image_position === "right"
                ? "order-last lg:pr-6 "
                : "lg:pl-6"
            }`}
          >
            {images.map((image, i) => (
              <Image
                key={i}
                alt=""
                blurDataURL={`${image}`}
                src={`${image}`}
                width="300"
                height="700"
                className={`h-[460px] rounded-xxl mx-auto xl:mx-0 ${
                  i % 2 ? "mt-auto" : "my-8 sm:mb-16"
                }`}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center gap-4 text-white">
            <TitleContentBlock slice={slice} />
            {slice?.main?.link && (
              <div
                onClick={() => router.push(slice?.main?.link)}
                // href={slice?.main?.link}
                className="mr-auto flex items-center gap-2 px-4 py-2 transition ease-in-out delay-150 bg-white hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full cursor-pointer"
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
