import Jsona from "jsona";
const dataFormatter = new Jsona();
import CONTENTAPI from "@/lib/api/content/request";
import FORMAPI from "@/lib/api/forms/request";
const dataFetcher = async (handler) => {
  if (handler?.data?.main?.collection?.type === "contents") {
    const { limit = 10, sort_by = "published_at" } = handler.data.main;
    const params = `?page[size]=${limit}&sort=${sort_by}`;
    const content = handler.data.main.collection;
    const res = await CONTENTAPI.getContents(content.id, params);
    const dataHandler = dataFormatter.deserialize(res);
    handler.data.main.collection.contents = dataHandler;
  }
  if (handler?.data?.main?.form?.type === "forms") {
    const form = handler.data.main.form;
    const res = await FORMAPI.findForm(form.id, "?include=blueprint");
    const dataHandler = dataFormatter.deserialize(res);
    handler.data.main.form.fields = dataHandler;
  }
  return handler;
};
export async function iterateBlock(blocks) {
  return await Promise.all(
    blocks.map(async (block) => {
      return await dataFetcher(block);
    })
  );
}
export async function iteratePage(page) {
  return await dataFetcher(page);
}
