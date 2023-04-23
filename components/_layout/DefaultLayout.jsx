import Menu from "@/layout/partials/Menu";
import Footer from "@/layout/partials/Footer";
export default function DefaultLayout(props) {
  return (
    <>
      <Menu />
      {props.children}
      <Footer />
    </>
  );
}
