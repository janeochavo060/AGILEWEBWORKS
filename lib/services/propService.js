import Jsona from "jsona";
const dataFormatter = new Jsona();
import PAGEAPI from "@/lib/api/pages/request";
import CONTENTAPI from "@/lib/api/content/request";
import FORMAPI from "@/lib/api/forms/request";
const dataFetcher = async (handler) => {
  await Promise.all(
    Object.keys(handler?.data || {}).map(async (key1) => {
      return await Promise.all(
        Object.keys(handler?.data?.[key1] || {}).map(async (key2) => {
          if (
            key2.includes("preload") ||
            key2 === "collection" ||
            key2 === "form"
          ) {
            if (handler?.data?.[key1]?.[key2]?.type === "contents") {
              const { limit = 10, sort_by = "published_at" } =
                handler.data[key1];
              const params = `?page[size]=${limit}&sort=${sort_by}`;
              const content = handler.data[key1][key2];
              const res = await CONTENTAPI.getContents(content.id, params);
              const dataHandler = dataFormatter.deserialize(res);
              handler.data[key1][key2].contents = dataHandler;
            }
            if (handler?.data?.[key1]?.[key2]?.type === "forms") {
              const form = handler.data[key1][key2];
              const res = await FORMAPI.findForm(form.id, "?include=blueprint");
              const dataHandler = dataFormatter.deserialize(res);
              handler.data[key1][key2].fields = dataHandler;
            }
          }
        })
      );
    })
  );
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
export async function pagesPath() {
  const pagesHandler = await PAGEAPI.getPages();
  const pages = dataFormatter.deserialize(pagesHandler);
  let allData = pages;
  let { last_page = 1 } = pagesHandler?.meta || {};
  let current_page = 1;
  while (current_page < last_page) {
    current_page = current_page + 1;
    const pagesHandler = await PAGEAPI.getPages(
      `?page[number]=${current_page}`
    );
    const pages = dataFormatter.deserialize(pagesHandler);
    allData = [...allData, ...pages];
  }
  return allData;
}
export async function contentEntriesPath(content) {
  const contentsHandler = await CONTENTAPI.getContents(content);
  const contents = dataFormatter.deserialize(contentsHandler);
  let allData = contents;
  let { last_page = 1 } = contentsHandler?.meta || {};
  let current_page = 1;
  while (current_page < last_page) {
    current_page = current_page + 1;
    const contentsHandler = await CONTENTAPI.getContents(
      content,
      `?page[number]=${current_page}`
    );
    const contents = dataFormatter.deserialize(contentsHandler);
    allData = [...allData, ...contents];
  }
  return allData;
}
