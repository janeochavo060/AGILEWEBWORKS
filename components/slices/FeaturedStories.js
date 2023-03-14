import VectorImage from "@/components/partials/VectorImage";
import ArticleThumbnail from "@/components/partials/ArticleThumbnail";
import Link from "next/link";

export default function FeaturedArticles({ slice }) {
  const { title = "", sub_title = "", button_label, button_link } = slice?.main;
  const collections = slice?.main?.collection?.collections || [];
  return (
    <div className="px-4 w-full xl:flex xl:justify-center mb-24">
      <div className="xl:w-[1345px] pt-4">
        <div className="flex justify-start items-center mb-2">
          <p className="font-semibold text-sm lg:text-lg xl:text-xl text-[#E11C38] uppercase">
            <span className="text-[#07336E]">{title.split(" ")[0]} </span>
            {title.split(" ").slice(1, title.split(" ").length).join(" ")}
          </p>
          <VectorImage />
        </div>

        <div className="flex flex-wrap">
          <p className="font-semibold text-main-black text-3xl lg:text-[35px]  text-left xl:text-left mb-8 w-full md:w-1/2 order-1">
            {sub_title}
          </p>

          <div className="flex justify-center md:justify-end mb-8 w-full md:w-1/2 order-3 md:order-2">
            <Link href={button_link}>
              <button
                className="font-bold uppercase bg-[#034F8B] text-xs px-8 text-white rounded-md h-[35px]"
              >
                {button_label}
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-8 w-full order-2 md:order-3">
            {collections.map((item, i) => (
              <ArticleThumbnail key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
