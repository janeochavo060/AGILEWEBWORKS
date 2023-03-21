import { paths, props } from "@/lib/props/articles";
export const getStaticPaths = paths;
export const getStaticProps = props;
import ArticleBanner from '@/components/slices/ArticleBanner';
export default function CollectionTemplate ({page}) {
  const data = page?.data
  const customs = {
    title: 'Current Events',
    subtitle: page?.title,
    date: page?.published_at
  }
  return (
    <>
      <ArticleBanner slice={{main: {...data?.main, ...data?.banner, ...customs}}} />
    </>
  )
};

