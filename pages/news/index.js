import { props } from "@/lib/props/news";
export const getStaticProps = props;
export default function News ({page}) {
  // console.log(page, 'News')
  return <>{page?.name}</>
};

