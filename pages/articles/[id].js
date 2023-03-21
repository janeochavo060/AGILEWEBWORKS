import { paths, props } from "@/lib/props/articles";
export const getStaticPaths = paths;
export const getStaticProps = props;
import ArticleBanner from "@/components/slices/ArticleBanner";
import Content from "@/components/slices/Content";
import Header from "@/components/_layout/partials/Header";
import Link from "next/link";
export default function CollectionTemplate({ page }) {
  const data = page?.data;
  const customs = {
    title: "Current Events",
    subtitle: page?.title,
    date: page?.published_at,
  };
  return (
    <>
      <Header meta={page?.metaData || {}} />
      <ArticleBanner
        slice={{ main: { ...data?.main, ...data?.banner, ...customs } }}
      />
      <Content slice={data} />
      <div className="text-center">
        <Link href="/current-events" title="Back">
          <button
            className={`bg-[#034F8B] font-bold uppercase text-xs px-8 text-white rounded-md h-[35px] mt-8 mb-16`}
          >
            BACK
          </button>
        </Link>
      </div>
    </>
  );
}
