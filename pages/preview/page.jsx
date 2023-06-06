import Jsona from "jsona";
const dataFormatter = new Jsona();
import PAGEAPI from "@/lib/api/pages/request";
import { sortBlocks } from "@/lib/services/globalService";
import { iterateBlock } from "@/lib/services/propService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ParentBlock from "@/components/page/ParentBlock";
import NotFound from "@/layout/partials/NotFound";
import globalState from "@/lib/store/globalState";
export default function DynamicPage() {
  const router = useRouter();
  const [page, setPage] = useState(null);
  const [blocks, setBlocks] = useState(null);
  const [error, setError] = useState(false);

  const url = router.asPath.split("?")[1] || "";
  let params = [];
  url.split("&").forEach((e) => {
    const z = e.split("=");
    params[z[0]] = z[1];
  });

  useEffect(() => {
    globalState.setState({
      showLazy: true,
    });
    const { key = null, expires = null, signature = null } = params;
    if (key && expires && signature) {
      PAGEAPI.findPage(
        key,
        `?include=blockContents.block,metaData&expires=${expires}&signature=${signature}`
      )
        .then(async (res) => {
          const pageHandler = dataFormatter.deserialize(res);
          const blocksHandler =
            pageHandler?.blockContents?.map((e) => {
              return {
                key: e?.block?.component || null,
                order: e?.order || null,
                data: e?.data || null,
              };
            }) || [];
          const sortedBlocks = sortBlocks(blocksHandler);
          setBlocks(await iterateBlock(sortedBlocks, dataFormatter));
          delete pageHandler.relationshipNames;
          delete pageHandler.blockContents;
          setPage(pageHandler);
        })
        .catch(() => {
          setError(true);
        });
    } else {
      setError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {page && blocks ? (
        <ParentBlock page={page} blocks={blocks} initialBlocks={3} />
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
