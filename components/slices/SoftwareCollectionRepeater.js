import dynamic from "next/dynamic";
export default function Slice({ slice }) {
  const collections = slice?.main?.featured || []
  let sliceComponents = collections.map((e) => {
    return dynamic(() => import("@/components/slices/" + e?.item?.attributes?.data?.main?.component), {
      loading: () => <div className="min-h-[100vh] w-full"></div>
    });
  });
  
  return (
    <>
      {sliceComponents.map((SliceComponent, i) => {
        const key = collections[i]?.item?.attributes?.data?.main?.component
        const data = {
          ...collections[i]?.item?.attributes?.data,
          id: `${key}-${i}`,
          key,
          title: collections[i]?.item?.attributes?.title
        };
        return <SliceComponent key={i} slice={data} />;
      })}
    </>
  )
}
