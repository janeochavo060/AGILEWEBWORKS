import Jsona from "jsona";
const dataFormatter = new Jsona();
import PAGEAPI from "@/lib/api/pages/request";
// import CONTENTAPI from "@/lib/api/content/request";
import { sortBlocks } from "@/lib/services/globalService";
import { iterateBlock } from "@/lib/services/propService";

const paths = async () => {
  const pagesHandler = await PAGEAPI.getPages();
  const pages = dataFormatter.deserialize(pagesHandler);
  const filteredPages = pages.filter((e) => e.id !== "home");
  // const contentsHandler = await CONTENTAPI.getContents("news-stories");
  // const contents = dataFormatter.deserialize(contentsHandler);
  // const pathsHandler = [...filteredPages, ...contents];
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
  const pageHandler = await PAGEAPI.findPageByRoute(
    segment,
    "?include=blockContents.block,metaData"
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
  delete page.relationshipNames;
  delete page.blockContents;
  return {
    props: { page, blocks: await iterateBlock(blocks, dataFormatter) },
  };
};

export { paths, props };
