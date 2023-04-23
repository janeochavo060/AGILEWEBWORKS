// import { props } from "@/lib/props/_contentTemplate";
// export const getStaticProps = props;
export default function ContentTemplate({ page }) {
  // console.log(page, 'Content')
  return <>{page?.name || "Content Title"}</>;
}
