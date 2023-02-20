import PAGEAPI from '@/lib/api/pages/request'
import Jsona from 'jsona';
const dataFormatter = new Jsona();
import pagesData from "@/lib/preBuildScripts/static/pagesData.json";
import { sortSlice } from '@/lib/services/globalService';

const paths = async () => {
  const pages = dataFormatter.deserialize(pagesData?.pages)
  const filteredPages = pages.filter(e => e.route_url.split('/').length === 3)
  const paths = filteredPages.map(page => {
    const segments = page.route_url.split('/')
    return {
      params: { level1: segments[1], level2: segments[2]}
    }
  })
  return { paths, fallback: false }
};

const props = async (context) => {
  const level2 = context?.params?.level2
  const pageHandler = await PAGEAPI.findPage(level2, "?include=sliceContents.slice");
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
  return { props: { page, slices } };
};

export { paths, props };
