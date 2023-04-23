import dynamic from "next/dynamic";
import Header from "@/components/_layout/partials/Header";
import PageLoading from "@/components/page/PageLoading";
import globalState from "@/lib/store/globalState";
export default function ParentBlock({ page, blocks = [], initialBlocks = 2 }) {
  const showLazy = globalState((state) => state.showLazy);
  const activeBlocks = blocks.slice(0, initialBlocks);
  const lazyBlocks = blocks.slice(initialBlocks);
  const ComponentLoader = ({ show, blocksHandler, placeholder = true }) => {
    return (
      show &&
      blocksHandler.map((e, i) => {
        const Component = dynamic(
          () => import("@/components/blocks/" + e?.key),
          {
            loading: () => {
              return !i && placeholder ? <PageLoading /> : <></>;
            },
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
      })
    );
  };
  return (
    <>
      <ComponentLoader show={true} blocksHandler={activeBlocks} />
      <ComponentLoader
        show={showLazy}
        blocksHandler={lazyBlocks}
        placeholder={false}
      />
      <Header meta={page?.metaData || {}} />
    </>
  );
}
