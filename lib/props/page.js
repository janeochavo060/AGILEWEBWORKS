import Jsona from "jsona";
const dataFormatter = new Jsona();
import PAGEAPI from "@/lib/api/pages/request";
import { sortBlocks } from "@/lib/services/globalService";
import { iterateBlock } from "@/lib/services/propService";

const paths = async () => {
  const pagesHandler = await PAGEAPI.getPages();
  const pages = dataFormatter.deserialize(pagesHandler);
  const filteredPages = pages.filter((e) => e.id !== "home");
  const paths = filteredPages.map((page) => {
    return {
      params: { id: page.id },
    };
  });
  return { paths, fallback: false };
};

const props = async (context) => {
  const id = context?.params?.id || "home";
  const pageHandler = await PAGEAPI.findPage(
    id,
    "?include=blockContents.block,metaData"
  );
  const page = dataFormatter.deserialize(pageHandler);
  const blocksHandler = page?.blockContents?.map((e) => {
    return {
      key: e?.block?.component || null,
      order: e?.order || null,
      data: e?.data || null,
    };
  });
  const blocks = sortBlocks(blocksHandler);
  delete page.relationshipNames;
  delete page.blockContents;
  return {
    props: { page, blocks: await iterateBlock(blocks, dataFormatter) },
  };
};

export { paths, props };
