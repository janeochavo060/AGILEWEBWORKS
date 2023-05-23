import { useEffect } from "react";
import Image from "next/image";
export default function CarouselSlide(props) {
  useEffect(() => {
    const use = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    use();
    setInterval(() => {
      setImageIni("all");
      document.getElementById("carouselSlideNext")?.click();
    }, 8000);
  }, []);

  const images = [
    "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
  ];

  return (
    <div
      id="carouselSlide"
      className="relative"
      data-te-carousel-init
      data-te-carousel-slide
      data-te-pause
    >
      {/* Indicators */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        {images.map((_, i) => {
          const attribs = i
            ? {}
            : {
                "data-te-carousel-active": "",
              };
          return (
            <button
              key={i}
              {...attribs}
              type="button"
              data-te-target="#carouselSlide"
              data-te-slide-to={i}
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            ></button>
          );
        })}
      </div>

      {/* Images - items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {images.map((image, i) => {
          const attribs = i
            ? {}
            : {
                "data-te-carousel-active": "",
              };
          return (
            <div
              key={i}
              className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                i ? "hidden" : ""
              }`}
              data-te-carousel-item
              {...attribs}
            >
              <Image
                src={image}
                alt="image"
                className="w-full"
                width={1000}
                height={0}
              />

              <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 class="text-xl">Fisrt slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button Next - Hidden */}
      <button
        id="carouselSlideNext"
        className="hidden"
        data-te-target="#carouselSlide"
        data-te-slide="next"
      />
    </div>
  );
}
