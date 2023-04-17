import dynamic from "next/dynamic";
import Header from "@/components/_layout/partials/Header";
export default function ParentPage({ page, blocks }) {
  const blockComponents = blocks.map((e) => {
    return dynamic(() => import("@/components/blocks/" + e?.key), {
      loading: () => <div className="min-h-[100vh] w-full"></div>,
    });
  });
  return (
    <>
      <Header meta={page?.metaData || {}} />
      {blockComponents.map((BlockComponent, i) => {
        const key = blocks[i]?.key;
        const data = {
          ...blocks[i]?.data,
          id: `${key}-${i}`,
          key,
        };
        return <BlockComponent key={i} block={data} />;
      })}
    </>
  );
}
