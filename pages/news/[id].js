import { paths, props } from "@/lib/props/news";
export const getStaticPaths = paths;
export const getStaticProps = props;
export default function News ({page}) {
  // console.log(page, 'Entry')
  return <>{page?.title}</>
};

