import Jsona from 'jsona';
const dataFormatter = new Jsona();
import pagesData from "@/lib/preBuildScripts/static/pagesData.json";
import { propData } from '@/lib/props/_index';

const paths = async () => {
  const pages = dataFormatter.deserialize(pagesData?.pages)
  const filteredPages = pages.filter(e => e.id !== 'home')
  const paths = filteredPages.map(page => {
    const segments = page.route_url.split('/').slice(1)
    return {
      params: { slug: segments },
      revalidate: 0,
    }
  })
  return { paths, fallback: false }
};

const props = async (context) => {
  const size = context?.params?.slug?.length || 0
  const id = size > 0 ? context?.params?.slug[size - 1] : 'home'
  return await propData(id)
};

export { paths, props };
