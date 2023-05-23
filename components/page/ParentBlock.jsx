import Header from "@/components/_layout/partials/Header";
import globalState from "@/lib/store/globalState";
import { components } from "@/lib/services/componentService";
export default function ParentBlock({ page, blocks = [], initialBlocks = 2 }) {
  const showLazy = globalState((state) => state.showLazy);
  const activeBlocks = blocks.slice(0, initialBlocks);
  const lazyBlocks = blocks.slice(initialBlocks);
  return (
    <>
      {activeBlocks.map((block) => {
        const Component = components[block.key];
        return <Component key={block.key} block={block.data} />;
      })}
      {showLazy && (
        <>
          {lazyBlocks.map((block) => {
            const Component = components[block.key];
            return <Component key={block.key} block={block.data} />;
          })}
        </>
      )}
      <Header meta={page?.metaData || {}} />
    </>
  );
}
