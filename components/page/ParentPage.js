import dynamic from "next/dynamic";
export default function ParentPage ({page, slices}) {
  let sliceComponents = slices.map((e) => {
    return dynamic(() => import("@/components/slices/" + e?.key));
  });

  sliceComponents.push(dynamic(() => import("@/components/lazyload/BottomComponent")))

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
}