import Jsona from 'jsona';
const dataFormatter = new Jsona();
import pagesData from "@/lib/preBuildScripts/static/pagesData.json";
import { propData } from '@/lib/props/_index';

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
  const id = context?.params?.level2
  return await propData(id)
};

export { paths, props };
