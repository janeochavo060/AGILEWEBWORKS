import Menu from "@/layout/partials/Menu";
const DefaultLayout = (props) => {
  return (
    <>
      <Menu />
      {props.children}
    </>
  );
};

export default DefaultLayout;
