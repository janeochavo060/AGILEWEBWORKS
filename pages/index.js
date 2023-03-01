import ParentPage from "@/components/page/ParentPage";
import { props } from "@/lib/props/page";
export const getStaticProps = props;
export default function Homepage ({page, slices}) {
  return <ParentPage page={page} slices={slices} bottomComponent="BottomComponent" />
};
