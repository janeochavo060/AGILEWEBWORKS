import Menu from "@/components/partials/Menu";
import Footer from "@/components/partials/Footer";

const DefaultLayout = (props) => {
  return (
    <>
      <div className="">
        <Menu />
      </div>
      <div className="h-full lg:my-0 my-8">
        {props.children}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
