import ParentPage from "@/components/page/ParentPage";
// import PAGEAPI from "@/lib/api/pages/request";
import { props } from "@/lib/props/slug";
export const getStaticProps = props;
const Homepage = ({ pageHandler, page, slices }) => {

  console.log(page, 'aaa')

  // const x = async () => {
  //   PAGEAPI.getPages().then((res) => {
  //     console.log(res, 'sss')
  //   })
  // }
  // x()

  return <ParentPage page={page} slices={slices} />
};
export default Homepage;
