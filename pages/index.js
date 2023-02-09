import { props } from "@/lib/props/page";
import dynamic from "next/dynamic";
export const getStaticProps = props;
const Homepage = ({ page, slices }) => {
  console.log(page)
  const sliceComponents = slices.map((e) => {
    return dynamic(() => import("@/components/slices/" + e?.key));
  });

  return (
    <>
      {sliceComponents.map((SliceComponent, key) => {
        let data = {
          ...slices[key]?.data,
          id: `${slices[key]?.key}-${key}`,
          key: `${slices[key]?.key}`,
        };
        return <SliceComponent key={key} slice={data} />;
      })}
    </>
  );
};

export default Homepage;
