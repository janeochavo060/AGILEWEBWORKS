import PAGEAPI from '@/lib/api/pages/request'
import Jsona from 'jsona';
const dataFormatter = new Jsona();
import { sortSlice } from '@/lib/services/globalService';
export async function propData (id) {
  const pageHandler = await PAGEAPI.findPage(id, "?include=sliceContents.slice");
  const page = dataFormatter.deserialize(pageHandler);
  const slicesHandler = page?.sliceContents?.map((e) => {
    return {
      key: e?.slice?.component || null,
      order: e?.order || null,
      data: e?.data || null,
    };
  });
  const slices = sortSlice(slicesHandler);
  delete page.relationshipNames
  delete page.sliceContents
  return {
    props: { page, slices }
  };
}
