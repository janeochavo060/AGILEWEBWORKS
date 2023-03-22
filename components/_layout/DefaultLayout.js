import MenuAbc from "@/layout/menus/MenuAbc";
import FooterAbc from "@/layout/footers/FooterAbc";
export default function DefaultLayout(props) {
  return (
    <>
      <MenuAbc />
      {props.children}
      <FooterAbc />
    </>
  );
}
