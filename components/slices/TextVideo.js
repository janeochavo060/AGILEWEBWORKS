import YouTubeEmbed from "@/components/partials/YouTubeEmbed";

export default function TextVideo({ slice, reverse }) {
  // console.log(slice)
  // useEffect(() => {
  //   document.documentElement.style.setProperty('--triangle-color', 'red')
  // }, [])

  return (
    <div
      className={`w-[calc(100%-2rem)] lg:max-h-[600px] h-full lg:mx-0  grid grid-cols-2 py-8 my-4 ${
        reverse
          ? "pr-[6%] trapezoid-right float-left"
          : "pl-[6%] trapezoid-left float-right"
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
      <YouTubeEmbed src={slice?.main?.link} height={500} />
    </div>
  );
}
