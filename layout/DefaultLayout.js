import Menu from "@/components/partials/Menu";
import Footer from "@/components/partials/Footer";
import SliceBackground from "@/components/partials/SliceBackground";
import Contact from "@/components/partials/Contact";
const DefaultLayout = (props) => {
  return (
    <>
      <Menu />
      {props.children}
      <SliceBackground>
        <Contact />
      </SliceBackground>
      <Footer />
    </>
  );
};

export default DefaultLayout;
