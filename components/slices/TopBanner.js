import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";

export default function TopBanner({ slice }) {
  // const router = useRouter();
  // const [bgImage, setBgImage] = useState(null)
  // useEffect(() => {
  //   handleScroll()
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router])

  // const handleScroll = () => {
  //   const width = window?.screen?.width;
  //   if (width < 640) {
  //       return setBgImage(slice?.main?.mobile_image)
  //   } else if (width < 1024) {
  //       return setBgImage(slice?.main?.tablet_image)
  //   } else {
  //       return setBgImage(slice?.main?.image)
  //   }
  // };

  // window.addEventListener("resize", handleScroll, { passive: true });

  return (
    <>

      <div className="sm:hidden absolute h-screen w-full grid grid-cols-1 justify-end overflow-hidden	">
        <Image priority className="max-w-[unset] w-screen" alt="" src={slice?.main?.mobile_image} width="400" height="400" />
      </div>
      <div className="hidden sm:grid lg:hidden absolute h-screen w-full grid-rows-1 justify-center overflow-hidden	">
        <Image priority className="max-w-[unset] w-screen" alt="" src={slice?.main?.tablet_image} width="800" height="800" />
      </div>
      <div className="hidden lg:grid absolute h-screen w-full grid-rows-1 justify-center overflow-hidden	">
        <Image priority className=" max-w-[unset] h-full" alt="" src={slice?.main?.image} width="2000" height="2000" />
      </div>

      <div
        className={`min-h-screen bg-no-repeat bg-cover bg-center flex flex-col pt-[100px] md:pt-[150px] lg:pt-0 lg:justify-center`}
        // style={{
        //   // background: slice?.main?.bg_color,
        //   // backgroundImage: `${slice?.main?.bg_color}, url(${slice?.main?.image})`,
        //   // backgroundImage: `${ bgImage ? `url(${bgImage})` : '' }`,
        // }}
      >

        {/* <Image alt="" src={slice?.main?.image} fill priority /> */}
        <div className="max-w-2xl md:max-w-[700px] lg:max-w-3xl px-8 lg:ml-[5%] flex flex-col gap-8 z-50">
          <h1 className="leading-normal font-bold text-3xl sm:text-4xl md:text-5xl sm:leading-[60px] md:leading-[65px] lg:text-6xl lg:leading-[70px]">
            {slice?.main?.title}
          </h1>
          {slice?.main?.link && (
            <Link
              href={slice?.main?.link}
              className="text-lg black-shadow mr-auto flex items-center gap-3 px-6 py-2 transition ease-in-out delay-150 bg-primary text-white hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full cursor-pointer"
            >
              <span>{slice?.main?.link_label || "Learn more"}</span>
              <svg
                width="16"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 12"
                fill="currentColor"
              >
                <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" />
              </svg>
            </Link>
          )}
        </div>
      </div>

    </>

  );
}
