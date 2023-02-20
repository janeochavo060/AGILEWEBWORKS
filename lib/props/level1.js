import PAGEAPI from '@/lib/api/pages/request'
import Jsona from 'jsona';
const dataFormatter = new Jsona();

const paths = async () => {
  const pagesHandler = await PAGEAPI.getPages()
  const pages = dataFormatter.deserialize(pagesHandler)
  const filteredPages = pages
    .filter(e => e.id !== 'home')
    .filter(e => e.route_url.split('/').length === 2)
  const paths = filteredPages.map(page => {
    return {
      params: { level1: page.id }
    }
  })
  return { paths, fallback: false }
};

const props = async (context) => {
  const id = context?.params?.level1 || "home";
  const pageHandler = await PAGEAPI.findPage(
    id,
    "?include=sliceContents.slice"
  );
  const page = dataFormatter.deserialize(pageHandler);

  const slicesHandler = page?.sliceContents?.map((e) => {
    return {
      key: e?.slice?.component || null,
      order: e?.order || null,
      data: e?.data || null,
    };
  });

  const sortSlice = (list) => {
    return list.sort((a, b) => a.order - b.order);
  };

  const slices = sortSlice(slicesHandler);

  delete page.relationshipNames
  delete page.sliceContents

  return {
    props: { page, slices },
    revalidate: 60,
  };
};

export { paths, props };
