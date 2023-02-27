import COLLECTIONAPI from '@/lib/api/collection/request';
import FORMAPI from "@/lib/api/forms/request"
export async function iterateSlice (slices, dataFormatter) {
  return await Promise.all(slices.map(async (slice) => {
    if (slice?.data?.main?.collection?.type === 'collections') {
      const collection = slice.data.main.collection
      const res = await COLLECTIONAPI.getCollections(collection.id)
      const dataHandler = dataFormatter.deserialize(res);
      slice.data.main.collection.collections = dataHandler
      return slice
    } else if (slice?.data?.main?.form?.type === 'forms') {
      const form = slice.data.main.form
      const res = await FORMAPI.findForm(form.id, '?include=blueprint')
      const dataHandler = dataFormatter.deserialize(res);
      slice.data.main.form.fields = dataHandler
      return slice
    } else {
      return slice
    }
  }))
};