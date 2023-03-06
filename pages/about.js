import AboutPage from "@/components/page/AboutPage";
import aboutPageData from 'static-data/about';

const Aboutpage = ({slices}) => {
  return <AboutPage slices={slices} />
};

export async function getStaticProps() {
  const slices = aboutPageData.slices;
  return {
    props: {
      slices,
    },
  }
}

export default Aboutpage
