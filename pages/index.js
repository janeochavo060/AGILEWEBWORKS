import ParentPage from "@/components/page/ParentPage";
import { props } from "@/lib/props/slug";
export const getStaticProps = props;
const Homepage = ({ page, slices }) => {
  return <ParentPage page={page} slices={slices} />
};
export default Homepage;
