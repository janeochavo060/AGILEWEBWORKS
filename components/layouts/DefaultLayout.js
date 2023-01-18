import Menu from "@/components/partials/Menu";
import Footer from "@/components/partials/Footer";
import SliceBackground from "@/components/partials/SliceBackground";
import ContactForm from "@/components/partials/ContactForm";

const DefaultLayout = (props) => {
  return (
    <>
      <Menu />
      <div className="h-full">{props.children}</div>
      <div>
        <SliceBackground>
          <ContactForm />
        </SliceBackground>

        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
