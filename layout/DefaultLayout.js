import Menu from "@/components/partials/Menu";
const DefaultLayout = (props) => {
  return (
    <>
      <Menu />
      {props.children}
    </>
  );
};

export default DefaultLayout;
