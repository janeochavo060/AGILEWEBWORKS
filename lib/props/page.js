import Jsona from "jsona";
const dataFormatter = new Jsona();
import PAGEAPI from "@/lib/api/pages/request";
import { sortBlocks } from "@/lib/services/globalService";
import {
  iterateBlock,
  iteratePage,
  pagesPath,
  // contentEntriesPath,
} from "@/lib/services/propService";

const paths = async () => {
  const pages = await pagesPath();
  const filteredPages = pages?.filter((e) => e.route_url !== "/") || [];
  // const apartments = await contentEntriesPath("apartments");
  // const pathsHandler = [...filteredPages, ...apartments];
  const pathsHandler = [...filteredPages];
  const paths = pathsHandler.map((page) => {
    const segments = page.route_url.split("/").slice(1);
    return {
      params: { id: segments },
    };
  });
  return { paths, fallback: false };
};

const props = async (context) => {
  const id = context?.params?.id || [];
  const segment = id.join("/");
  const pageHandler = await PAGEAPI.findByRoute(
    segment,
    "?include=blockContents.block,metaData,content"
  );
  const page = dataFormatter.deserialize(pageHandler);
  const blocksHandler =
    page?.blockContents?.map((e) => {
      return {
        key: e?.block?.component || null,
        order: e?.order || null,
        data: e?.data || null,
      };
    }) || [];
  const blocks = sortBlocks(blocksHandler);
  delete page.links;
  delete page.meta;
  delete page.relationshipNames;
  delete page.blockContents;
  return {
    props: {
      page: await iteratePage(page),
      blocks: await iterateBlock(blocks),
    },
  };
};

export { paths, props };
