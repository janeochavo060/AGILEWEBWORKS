import YouTubeEmbed from "@/components/partials/YouTubeEmbed";

export default function TextVideo({ slice, reverse }) {
  // console.log(slice)
  // useEffect(() => {
  //   document.documentElement.style.setProperty('--triangle-color', 'red')
  // }, [])

  return (
    <div
      className={`w-full lg:max-h-[600px] h-full lg:mx-0  grid grid-cols-2 py-8 my-8 ${
        reverse ? "pr-[6%] trapezoid-right" : "pl-[6%] trapezoid-left"
      }`}
      style={{ backgroundColor: `${slice?.main?.b_g_color || "none"}` }}
    >
      <div
        className="p-4 md:p-8 flex flex-col justify-center items-start gap-4"
        style={{ order: reverse ? 1 : -1 }}
      >
        <h2 className="font-bold text-white text-3xl">{slice?.main?.title}</h2>
        <div
          className="text-white text-xl border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline"
          dangerouslySetInnerHTML={{ __html: slice?.main?.content }}
        />
      </div>
      <YouTubeEmbed src={slice?.main?.link} height={400} />
    </div>
  );

  return (
    // VIDEO LEFT; TITLE; DESCRIPTION
    <div className="flex my-8 ml-8">
      <div
        className="flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0 trapezoid-left"
        style={{ backgroundColor: `${slice?.main?.b_g_color || "none"}` }}
      >
        <div className="flex md:flex-row flex-col justify-between items-center xxl:max-w-[1920px] xl:max-w-[1920px] w-full relative">
          <div className="flex w-[1000px] justify-center">
            <div className="flex flex-col justify-center items-start p-4">
              <div className="lg:text-[30px] text-[35px] font-bold text-white">
                {slice?.main?.title}
              </div>
              <div className="flex flex-col md:w-[600px] w-ful">
                <div
                  className={`
                    text-white text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline
                    `}
                >
                  {slice?.main?.content}
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative items-start md:w-[900px] md:h-[500px] w-[320px] h-[200px]">
            <iframe width="100%" className="player" src={slice?.main?.link} />
          </div>
        </div>
      </div>
    </div>
  );
}
