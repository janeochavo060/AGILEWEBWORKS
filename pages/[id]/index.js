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
      {sliceComponents.map((SliceComponent, key) => (
        <SliceComponent key={key} slice={slices[key].data} />
      ))}
    </div>
  );
}
