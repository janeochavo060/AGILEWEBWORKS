import CurrentEventsPage from "@/components/page/CurrentEventsPage";
import currentEventsPageData from 'static-data/currentEvents';

const CurrentEventspage = ({page, slices}) => {
  return <></>
  return <CurrentEventsPage page={page} slices={slices} />
};

// export async function getStaticProps() {
//   const slices = currentEventsPageData.slices;
//   return {
//     props: {
//       slices,
//     },
//   }
// }

export default CurrentEventspage
