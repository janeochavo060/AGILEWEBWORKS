import MenuAbc from "@/components/_layout/partials/MenuAbc";
import FooterAbc from "@/components/_layout/partials/FooterAbc";
export default function DefaultLayout (props) {
  return (
    <>
      <MenuAbc />
      {props.children}
      <FooterAbc />
    </>
  );
};