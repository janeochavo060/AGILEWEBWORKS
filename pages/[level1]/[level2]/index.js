import dynamic from "next/dynamic";
import { paths, props } from "@/lib/props/level2";
export const getStaticPaths = paths;
export const getStaticProps = props;
const Homepage = ({ page, slices }) => {
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
