import Menu from "@/components/_layout/partials/Menu";
export default function DefaultLayout (props) {
  return (
    <>
      <Menu />
      {props.children}
    </>
  );
};