import Menu from "@/layout/partials/Menu";
import dynamic from "next/dynamic";
import globalState from "@/lib/store/globalState";
export default function DefaultLayout(props) {
  const showLazy = globalState((state) => state.showLazy);
  const Footer = () => {
    const Component = dynamic(() => import("@/layout/partials/Footer"));
    return <Component />;
  };
  return (
    <>
      <Menu />
      {props.children}
      {showLazy && <Footer />}
    </>
  );
}
