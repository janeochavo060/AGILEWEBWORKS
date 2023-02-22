import ParentPage from "@/components/page/ParentPage";
import { paths, props } from "@/lib/props/slug";
export const getStaticPaths = paths;
export const getStaticProps = props;
const Homepage = ({ page, slices }) => {
  return <ParentPage page={page} slices={slices} />
};
export default Homepage;

