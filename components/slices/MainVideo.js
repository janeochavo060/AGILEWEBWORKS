import YouTubeEmbed from "@/components/partials/YouTubeEmbed";

export default function Slice({ slice }) {
  // console.log(slice)
  return (
    <div className="m-8">
      <YouTubeEmbed src={slice?.main?.link} height="85vh" />
    </div>
  );
}
