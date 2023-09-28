import Jsona from "jsona";
const dataFormatter = new Jsona();
import PAGEAPI from "@/lib/api/pages/request";
import CONTENTAPI from "@/lib/api/content/request";
import { sortBlocks } from "@/lib/services/globalService";
import { iterateBlock } from "@/lib/services/propService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ParentBlock from "@/components/page/ParentBlock";
import NotFound from "@/components/page/NotFound";
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
  const {
    slug = null,
    expires = null,
    signature = null,
    contents = null,
  } = params;

  PAGEAPI.getFindPagesSwr(
    slug,
    `?include=blockContents.block,metaData&expires=${expires}&signature=${signature}`,
    {
      render: slug && expires && signature && !contents,
      expires,
      signature,
      onSuccess: async (res) => {
        const pageHandler = dataFormatter.deserialize(res.data);
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
      },
      onError: () => {
        setError(true);
      },
    }
  );

  CONTENTAPI.getContentsSwr(
    `/${contents}/entries/${slug}?include=metaData,content`,
    {
      render: slug && expires && signature && contents,
      expires,
      signature,
      onSuccess: async (res) => {
        const pageHandler = dataFormatter.deserialize(res.data);
        delete pageHandler.relationshipNames;
        delete pageHandler.blockContents;
        setPage(pageHandler);
      },
      onError: () => {
        setError(true);
      },
    }
  );

  useEffect(() => {
    globalState.setState({
      showLazy: true,
    });
    // const {
    //   slug = null,
    //   expires = null,
    //   signature = null,
    //   contents = null,
    // } = params;

    // if (slug && expires && signature) {
    //   if (contents) {
    //     CONTENTAPI.findEntry(contents, slug, "?include=metaData,content")
    //       .then((res) => {
    //         const pageHandler = dataFormatter.deserialize(res);
    //         delete pageHandler.relationshipNames;
    //         delete pageHandler.blockContents;
    //         setPage(pageHandler);
    //       })
    //       .catch(() => {
    //         setError(true);
    //       });
    //   } else {
    //     PAGEAPI.findPage(
    //       slug,
    //       `?include=blockContents.block,metaData&expires=${expires}&signature=${signature}`
    //     )
    //       .then(async (res) => {
    //         const pageHandler = dataFormatter.deserialize(res);
    //         const blocksHandler =
    //           pageHandler?.blockContents?.map((e) => {
    //             return {
    //               key: e?.block?.component || null,
    //               order: e?.order || null,
    //               data: e?.data || null,
    //             };
    //           }) || [];
    //         const sortedBlocks = sortBlocks(blocksHandler);
    //         setBlocks(await iterateBlock(sortedBlocks, dataFormatter));
    //         delete pageHandler.relationshipNames;
    //         delete pageHandler.blockContents;
    //         setPage(pageHandler);
    //       })
    //       .catch(() => {
    //         setError(true);
    //       });
    //   }
    // } else {
    //   setError(true);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Renderer = ({ page, blocks }) => {
    switch (page?.content?.id) {
      case "apartments":
        return "Content";
      default:
        return <ParentBlock page={page} blocks={blocks} />;
    }
  };

  return (
    <>
      {page || blocks ? (
        <Renderer page={page} blocks={blocks} />
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
