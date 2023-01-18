import Menu from "@/components/partials/Menu";
import Footer from "@/components/partials/Footer";
import SliceBackground from "@/components/partials/SliceBackground";
import ContactForm from "@/components/partials/ContactForm";

const DefaultLayout = (props) => {
  return (
    <>
      <div
        className={`sticky top-0 md:py-4 py-0 z-50 w-full transition duration-600 ease-in-out bg-transparent backdrop-blur`}
      >
        <Menu />
      </div>
      <div className="h-full -my-28">{props.children}</div>
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
