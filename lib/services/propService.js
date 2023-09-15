import Jsona from "jsona";
const dataFormatter = new Jsona();
import PAGEAPI from "@/lib/api/pages/request";
import CONTENTAPI from "@/lib/api/content/request";
import FORMAPI from "@/lib/api/forms/request";
import TAXONOMYAPI from "@/lib/api/taxonomy/request";
const dataFetcher = async (handler) => {
  await Promise.all(
    Object.keys(handler?.data || {}).map(async (key1) => {
      return await Promise.all(
        Object.keys(handler?.data?.[key1] || {}).map(async (key2) => {
          if (
            key2.includes("preload") ||
            key2 === "collection" ||
            key2 === "taxonomy" ||
            key2 === "form"
          ) {
            const data = handler?.data?.[key1]?.[key2];
            if (data?.type === "contents") {
              const filters = Object.keys(handler?.data?.[key1])
                .filter((n) => n.includes("filter_taxonomy"))
                .map((n) => {
                  const taxonomy = handler.data[key1][n];
                  // Check params if multiple
                  const params =
                    typeof taxonomy?.length === "number"
                      ? taxonomy?.map((n2) => n2.id).join(",")
                      : taxonomy?.id;
                  return `filter[taxonomies][${n
                    .replace("filter_taxonomy_", "")
                    .replaceAll("_", "-")}]=${params}`;
                })
                .join("&");
              const { limit = 10, sort_by = "published_at" } =
                handler.data[key1];
              const params = `?page[size]=${limit}&sort=${sort_by}&${filters}`;
              const res = await CONTENTAPI.getContents(data.id, params);
              const dataHandler = dataFormatter.deserialize(res);
              data.contents = clean(dataHandler);
              const { meta } = res;
              delete meta.links;
              delete meta.path;
              data.contentsMeta = meta;
            }
            if (data?.type === "forms") {
              const res = await FORMAPI.findForm(data.id, "?include=blueprint");
              const dataHandler = dataFormatter.deserialize(res);
              data.fields = clean(dataHandler);
            }
            if (data?.type === "taxonomies") {
              const res = await TAXONOMYAPI.findTaxonomy(data.id);
              const dataHandler = dataFormatter.deserialize(res);
              data.taxonomy = clean(dataHandler);
            }
            clean(data);
          }
        })
      );
    })
  );
  return handler;
};
const clean = (data) => {
  delete data.links;
  delete data.meta;
  delete data.relationshipNames;
  delete data.relationships;
  return data;
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
