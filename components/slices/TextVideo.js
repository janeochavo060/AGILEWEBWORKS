import YouTubeEmbed from "@/components/partials/YouTubeEmbed";

export default function TextVideo({ slice }) {
  return (
    <div
      className={`w-[calc(100%-2rem)] lg:max-h-[600px] h-full lg:mx-0 grid grid-cols-1 lg:grid-cols-2 py-8 my-4 ${
        slice?.main?.video_position === 'left'
          ? "pr-[6%] trapezoid-right float-left"
          : "pl-[6%] trapezoid-left float-right"
      }`}
      style={{ backgroundColor: `${slice?.main?.bg_color || "none"}` }}
    >
      <div
        className={`p-4 md:p-8 flex flex-col justify-center items-start gap-4 ${
          slice?.main?.video_position === 'left' ? "order-1" : "-order-1"
        }`}
      >
        <h2 className="font-bold text-white text-3xl">{slice?.main?.title}</h2>
        <div
          className="unreset text-white text-xl border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline"
          dangerouslySetInnerHTML={{ __html: slice?.main?.content }}
        />
      </div>
      <YouTubeEmbed src={slice?.main?.link} divHeight="480px" />
    </div>
  );
}
