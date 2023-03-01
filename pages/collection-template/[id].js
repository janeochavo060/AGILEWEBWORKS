// import { paths, props } from "@/lib/props/collectionTemplate";
// export const getStaticPaths = paths;
// export const getStaticProps = props;
export default function CollectionTemplate ({page}) {
  // console.log(page, 'Entry')
  return <>{page?.title || 'Collection Entry Title'}</>
};

