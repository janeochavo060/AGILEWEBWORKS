import dynamic from "next/dynamic";
import { paths, props } from "@/lib/props/page";
export const getStaticPaths = paths;
export const getStaticProps = props;

export default function Page({ page, slices }) {
  const sliceComponents = slices.map((e) => {
    return dynamic(() => import("@/components/slices/" + e.key));
  });

  return (
    <div>
      {sliceComponents.map((SliceComponent, key) => {
        let data = {
          ...slices[key]?.data,
          id: `${slices[key]?.key}-${key}`,
          key: `${slices[key]?.key}`,
        };
        return <SliceComponent key={key} slice={data} />;
      })}
    </div>
  );
}
