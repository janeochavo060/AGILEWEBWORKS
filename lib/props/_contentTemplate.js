import Jsona from "jsona";
const dataFormatter = new Jsona();
import CONTENTAPI from "@/lib/api/content/request";

const paths = async () => {
  const contentsHandler = await CONTENTAPI.getContents("content");
  const contents = dataFormatter.deserialize(contentsHandler);
  const paths = contents.map((e) => {
    return {
      params: { id: e.id },
    };
  });
  return { paths, fallback: "blocking" };
};

const props = async (context) => {
  const entryId = context?.params?.id;
  const pageHandler = entryId
    ? await CONTENTAPI.findEntry("contents", entryId)
    : await CONTENTAPI.findContent("contents");
  const page = dataFormatter.deserialize(pageHandler);
  return {
    props: { page },
    revalidate: 10,
  };
};

export { paths, props };
