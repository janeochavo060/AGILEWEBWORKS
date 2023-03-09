import dynamic from "next/dynamic";
export default function Slice({ slice }) {
  const collections = slice?.main?.apps || []
  console.log(collections)
  let sliceComponents = collections.map((e) => {
    return dynamic(() => import("@/components/slices/" + e?.attributes?.data?.main?.component), {
      loading: () => <div className="min-h-[100vh] w-full"></div>
    });
  });
  
  return (
    <>
      {sliceComponents.map((SliceComponent, i) => {
        const key = collections[i]?.attributes?.data?.main?.component
        const data = {
          ...collections[i]?.attributes?.data,
          id: `${key}-${i}`,
          key,
          title: collections[i]?.attributes?.title
        };
        return <SliceComponent key={i} slice={data} />;
      })}
    </>
  )
}
