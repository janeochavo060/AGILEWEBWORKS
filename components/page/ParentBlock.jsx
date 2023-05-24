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
        return (
          <Component
            key={block.key + block?.order?.toString()}
            block={block.data}
            index={block?.order}
          />
        );
      })}
      {showLazy && (
        <>
          {lazyBlocks.map((block) => {
            const Component = components[block.key];
            return (
              <Component
                key={block.key + block?.order?.toString()}
                block={block.data}
                index={block?.order}
              />
            );
          })}
        </>
      )}
      <Header meta={page?.metaData || {}} />
    </>
  );
}
