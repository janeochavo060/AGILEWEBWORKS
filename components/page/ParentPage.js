import dynamic from "next/dynamic";
import BottomComponent from "@/components/lazyload/BottomComponent";
export default function ParentPage ({page, slices}) {
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
      <BottomComponent/>
    </>
  );
}