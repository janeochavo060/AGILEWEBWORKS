import dynamic from "next/dynamic";
import Header from "@/components/_layout/partials/Header";
export default function ParentPage({ page, slices, bottomComponent = false }) {
  const sliceComponents = slices.map((e) => {
    return dynamic(() => import("@/components/slices/" + e?.key), {
      loading: () => <div className="min-h-[100vh] w-full"></div>,
    });
  });
  // Push global component
  // Put it here to prevent displaying before the upper content
  if (bottomComponent) {
    // sliceComponents.push(dynamic(() => import(`@/components/partials/BottomComponent/${bottomComponent}`)))
  }
  return (
    <>
      <Header meta={page?.metaData || {}} />
      {sliceComponents.map((SliceComponent, i) => {
        const key = slices[i]?.key;
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
