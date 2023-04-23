import dynamic from "next/dynamic";
import Header from "@/components/_layout/partials/Header";
import PageLoading from "@/components/page/PageLoading";
import { useEffect, useState } from "react";
export default function ParentBlock({ page, blocks = [], initialBlocks = 2 }) {
  const [showLazy, setShowLazy] = useState(false);
  const activeBlocks = blocks.slice(0, initialBlocks);
  const lazyBlocks = blocks.slice(initialBlocks);
  useEffect(() => {
    const handleScroll = () => {
      setShowLazy(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);
  const loadBlocks = (show, blocksHandler, placeholder = true) => {
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
      {loadBlocks(true, activeBlocks)}
      {loadBlocks(showLazy, lazyBlocks, false)}
      <Header meta={page?.metaData || {}} />
    </>
  );
}
