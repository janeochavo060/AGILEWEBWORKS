import dynamic from "next/dynamic";
import Header from "@/components/partials/Header";
export default function ParentPage ({page, slices}) {
  const sliceComponents = slices.map((e) => {
    return dynamic(() => import("@/components/slices/" + e?.key));
  });
  // Push global component
  // Put it here to prevent displaying before the upper content
  sliceComponents.push(dynamic(() => import("@/components/lazyload/BottomComponent")))
  return (
    <>
      <Header meta={page?.metaData || {}} />
      {sliceComponents.map((SliceComponent, i) => {
        const key = slices[i]?.key
        const data = {
          ...slices[i]?.data,
          id: `${key}-${i}`,
          key,
        };
        return <SliceComponent key={i} slice={data} />;
      })}
    </>
  );
}