import CurrentEventsPage from "@/components/page/CurrentEventsPage";
import currentEventPageData from 'static-data/currentEvents';

const CurrentEventspage = ({page, slices}) => {
  return <CurrentEventsPage page={page} slices={slices} />
};

export async function getStaticProps() {
  const slices = currentEventPageData.slices;
  return {
    props: {
      slices,
    },
  }
}

export default CurrentEventspage
