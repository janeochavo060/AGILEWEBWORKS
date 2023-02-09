import PAGEAPI from '@/lib/api/pages/request'
import Jsona from 'jsona';
const dataFormatter = new Jsona();

const paths = async () => {
  const pagesHandler = await PAGEAPI.getPages()
  const pages = dataFormatter.deserialize(pagesHandler)
  const filteredPages = pages.filter(e => e.id !== 'home')
  const paths = filteredPages.map(page => {
    return {
      params: { id: page.id }
    }
  })
  return { paths, fallback: false }
};

const props = async (context) => {
  const id = context?.params?.id || "home";
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

  return {
    props: { page, slices },
    revalidate: 60,
  };
};

export { paths, props };
