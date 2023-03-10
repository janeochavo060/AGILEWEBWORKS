import PartnersPage from "@/components/page/PartnersPage";
import partnersPageData from 'static-data/partners';

const Partnerspage = ({page, slices}) => {
  return <PartnersPage page={page} slices={slices} />
};

export async function getStaticProps() {
  const slices = partnersPageData.slices;
  return {
    props: {
      slices,
    },
  }
}

export default Partnerspage
