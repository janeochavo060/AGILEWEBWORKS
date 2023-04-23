// import { paths, props } from "@/lib/props/_contentTemplate";
// export const getStaticPaths = paths;
// export const getStaticProps = props;
export default function ContentTemplate({ page }) {
  // console.log(page, 'Entry')
  return <>{page?.title || "Content Entry Title"}</>;
}
