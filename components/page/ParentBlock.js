import dynamic from "next/dynamic";
import Header from "@/components/_layout/partials/Header";
export default function ParentBlock({ page, blocks }) {
  return (
    <>
      <Header meta={page?.metaData || {}} />
      {blocks.map((e, i) => {
        const Component = dynamic(
          () => import("@/components/blocks/" + e?.key),
          {
            loading: () => <div className="min-h-[100vh] w-full"></div>,
          }
        );
        return (
          <Component
            key={i}
            block={{
              ...e.data,
              key: e.key,
            }}
          />
        );
      })}
    </>
  );
}
