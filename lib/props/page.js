import Jsona from 'jsona';
const dataFormatter = new Jsona();
import PAGEAPI from '@/lib/api/pages/request'
import { sortSlice } from '@/lib/services/globalService';
import { iterateSlice } from '@/lib/services/propService';

const paths = async () => {
  const pagesHandler = await PAGEAPI.getPages()
  const pages = dataFormatter.deserialize(pagesHandler)
  const filteredPages = pages.filter(e => e.id !== 'home')
  const paths = filteredPages.map(page => {
    const segments = page.route_url.split('/').slice(1)
    return {
      params: { slug: segments }
    }
  })
  return { paths, fallback: false }
};

const props = async (context) => {
  const size = context?.params?.slug?.length || 0
  const id = size > 0 ? context?.params?.slug[size - 1] : 'home'
  const pageHandler = await PAGEAPI.findPage(id, "?include=sliceContents.slice,metaData");
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
    props: { page, slices: await iterateSlice(slices, dataFormatter) } };
};

export { paths, props };
