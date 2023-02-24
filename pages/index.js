import ParentPage from "@/components/page/ParentPage";
// import PAGEAPI from "@/lib/api/pages/request";
import { props } from "@/lib/props/page";
export const getStaticProps = props;
export default function Homepage ({page, slices}) {

  // const x = async () => {
  //   PAGEAPI.getPages().then((res) => {
  //     console.log(res, 'sss')
  //   })
  // }
  // x()

  return <ParentPage page={page} slices={slices} />
};
