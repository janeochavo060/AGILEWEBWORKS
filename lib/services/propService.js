import CONTENTAPI from "@/lib/api/content/request";
import FORMAPI from "@/lib/api/forms/request";
export async function iterateBlock(blocks, dataFormatter) {
  return await Promise.all(
    blocks.map(async (block) => {
      if (block?.data?.main?.collection?.type === "contents") {
        const { limit = 10, sort_by = "published_at" } = block.data.main;
        const params = `?page[size]=${limit}&sort=${sort_by}`;
        const content = block.data.main.collection;
        const res = await CONTENTAPI.getContents(content.id, params);
        const dataHandler = dataFormatter.deserialize(res);
        block.data.main.collection.contents = dataHandler;
        return block;
      } else if (block?.data?.main?.form?.type === "forms") {
        const form = block.data.main.form;
        const res = await FORMAPI.findForm(form.id, "?include=blueprint");
        const dataHandler = dataFormatter.deserialize(res);
        block.data.main.form.fields = dataHandler;
        return block;
      } else {
        return block;
      }
    })
  );
}
