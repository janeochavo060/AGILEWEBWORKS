import { paths, props } from "@/lib/props/articles";
export const getStaticPaths = paths;
export const getStaticProps = props;
import ArticleBanner from "@/components/slices/ArticleBanner";
import Header from "@/components/_layout/partials/Header";
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
    </>
  );
}
