import Menu from "@/layout/partials/Menu";
export default function DefaultLayout (props) {
  return (
    <>
      <Menu />
      {props.children}
    </>
  );
};