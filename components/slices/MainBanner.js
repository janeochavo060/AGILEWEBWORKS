import Image from "next/image";
export default function Slice({ slice }) {
  const title = slice?.main?.title || "";
  return (
    <div
      className="relative w-auto bg-no-repeat bg-cover bg-center mb-4 sm:mb-12 md:mb-16 lg:mb-14 xl:mb-16 2xl:mb-28 h-[290px] sm:h-[360px] md:h-[460px] lg:h-[70vh] lg:h-[80vh]"
      // style={{
      //   backgroundImage: `url(${slice?.main?.image})`,
      // }}
    >
      <Image
        alt="ABC+"
        src={slice?.main?.image}
        fill
        priority
        className="object-cover object-center"
      />
      <div
        className="absolute w-full h-full mt-2"
        style={{
          background:
            "linear-gradient(0deg, rgba(255,255,255,1) 2%, rgba(255,255,255,0) 45%)",
        }}
      ></div>

      <div className="absolute bottom-[0] md:bottom-[-5%] lg:bottom-[-1px] w-full">
        <div className="flex justify-center w-full">
          <div className="xl:bg-white rounded-tl-3xl rounded-tr-3xl">
            <p className="py-6 px-8 font-bold text-[#07336E] text-center text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-[50px]">
              <span className="text-[#E11C38]">{title.split(" ")[0]} </span>
              {title.split(" ").slice(1, title.split(" ").length).join(" ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
