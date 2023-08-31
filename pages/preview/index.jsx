import Jsona from "jsona";
const dataFormatter = new Jsona();
import PAGEAPI from "@/lib/api/pages/request";
import { sortBlocks } from "@/lib/services/globalService";
import { iterateBlock } from "@/lib/services/propService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NotFound from "@/layout/partials/NotFound";
import ParentBlock from "@/components/page/ParentBlock";
export default function DynamicPage() {
  const router = useRouter();
  const [page, setPage] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const url = router.asPath.split("?")[1] || "";
  let params = [];
  url.split("&").forEach((e) => {
    const z = e.split("=");
    params[z[0]] = z[1];
  });
  const { slug = null, expires = null, signature = null } = params;
  const { data: dataHandler, error } = PAGEAPI.getFindPagesSwr(
    slug,
    `?include=blockContents.block,metaData&expires=${expires}&signature=${signature}`,
    {
      render: slug && expires && signature,
    }
  );

  useEffect(() => {
    const pageHandler = dataFormatter.deserialize(dataHandler || {});
    const blocksHandler =
      pageHandler?.blockContents?.map((e) => {
        return {
          key: e?.block?.component || null,
          order: e?.order || null,
          data: e?.data || null,
        };
      }) || [];
    const sortedBlocks = sortBlocks(blocksHandler);
    async function iterate() {
      const blocks = await iterateBlock(sortedBlocks, dataFormatter);
      setBlocks(blocks);
      delete pageHandler?.relationshipNames;
      delete pageHandler?.blockContents;
      setPage(pageHandler);
    }
    iterate();
  }, [dataHandler]);

  return (
    <>
      {page && blocks ? (
        <ParentBlock page={page} blocks={blocks} initialBlocks={4} />
      ) : (
        <>
          {error ? (
            <NotFound />
          ) : (
            <div className="w-full text-center py-[150px] md:py-[200px]">
              Loading...
            </div>
          )}
        </>
      )}
    </>
  );
}
