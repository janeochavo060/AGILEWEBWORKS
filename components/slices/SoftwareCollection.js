import dynamic from "next/dynamic";
export default function Slice({ slice }) {
  console.log(slice, 'test')
  const collections = slice?.main?.collection?.collections || []
  let sliceComponents = collections.map((e) => {
    return dynamic(() => import("@/components/slices/" + e?.data?.main?.component), {
      loading: () => <div className="min-h-[100vh] w-full"></div>
    });
  });

  return (
    <>
      {sliceComponents.map((SliceComponent, i) => {
        const key = collections[i]?.data?.main?.component
        const data = {
          ...collections[i]?.data,
          id: `${key}-${i}`,
          key,
          title: collections[i]?.title
        };
        return <SliceComponent key={i} slice={data} />;
      })}
    </>
  )
}
