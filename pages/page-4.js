import videosGallery from "static-data/videosGallery";
import VideosGallery from "@/components/slices/VideosGallery";

const Page4 = ({ slices }) => {
  return (
    <>
      {slices.map((slice, index) => {
        return (
          <div key={index}>
            {slice.sliceType === "videos-gallery" && (
              <VideosGallery slice={slice} />
            )}
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const slices = videosGallery.slices;
  return {
    props: {
      slices,
    },
  };
}

export default Page4;
