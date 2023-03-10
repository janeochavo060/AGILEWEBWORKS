import Link from "next/link"
import TitleContentBlock from "../partials/TitleContentBlock"
export default function Slice({ slice }) {
  const scrollToComponent = (e) => {
    const elem = document.getElementById(slice?.main?.btn_scroll_to)
    const scrollTo = elem?.offsetTop
    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    })
  }

  return (
    <div
      id={slice?.id}
      className="flex items-center w-full  h-full lg:mx-0 px-8 py-6 lg:py-12 min-h-[620px]"
      style={{ backgroundColor: `${slice?.main?.bg_color || "#FFFFFF"}` }}
    >
      <div className="flex justify-start items-start max-w-screen-xl mx-auto w-full">
        {/* <div className="flex justify-start items-start xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full"> */}
        <div className="flex xxl:max-w-[800px] xl:max-w-[800px] w-full items-center">
          <div className="flex flex-col gap-8">
            <TitleContentBlock
              slice={slice}
              titleClass="mobile:text-4xl sm:text-5xl xl:text-5xl 2xl:text-5xl text-2xl"
              className="max-w-xl"
            />
            {slice?.main?.link && (
              <Link
                href={slice?.main?.link}
                className="mr-auto flex items-center gap-2 px-4 py-2 transition ease-in-out delay-150 bg-primary text-white hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full cursor-pointer"
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
              </Link>
            )}
            {slice?.main?.btn_scroll_to && (
              <button
                onClick={scrollToComponent}
                className="mr-auto flex items-center gap-2 px-4 py-2 transition ease-in-out delay-150 bg-primary text-white hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full cursor-pointer"
              >
                <span>Learn More</span>
                <svg
                  width="16"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 12"
                  fill="currentColor"
                  className="rotate-90"
                >
                  <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
