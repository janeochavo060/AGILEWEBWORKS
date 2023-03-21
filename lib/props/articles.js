import Jsona from "jsona";
const dataFormatter = new Jsona();
import COLLECTIONAPI from "@/lib/api/collection/request";

const paths = async () => {
  const collectionsHandler = await COLLECTIONAPI.getCollections("news-stories");
  const collections = dataFormatter.deserialize(collectionsHandler);
  const paths = collections.map((e) => {
    return {
      params: { id: e.id },
    };
  });
  return { paths, fallback: false };
};

const props = async (context) => {
  const entryId = context?.params?.id;
  const pageHandler = await COLLECTIONAPI.findEntry(
    "news-stories",
    entryId,
    "?include=metaData"
  );
  const page = dataFormatter.deserialize(pageHandler);
  return {
    props: { page },
  };
};

export { paths, props };
