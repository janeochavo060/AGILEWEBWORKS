import MenuHalcyon from "@/layout/menus/MenuHalcyon";
import FooterHalcyon from "@/layout/footers/FooterHalcyon";
export default function DefaultLayout(props) {
  return (
    <>
      <MenuHalcyon />
      {props.children}
      <FooterHalcyon />
    </>
  );
}
