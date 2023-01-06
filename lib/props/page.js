import PAGEAPI from '@/lib/api/pages/request'
import Jsona from 'jsona';
const dataFormatter = new Jsona();

const paths = async () => {
  const pagesHandler = await PAGEAPI.getPages()
  const pages = dataFormatter.deserialize(pagesHandler)
  const paths = pages.map(page => {
    return {
      params: { id: page.id }
    }
  })
  return { paths, fallback: false }
};

const props = async (context) => {
  const id = context.params.id;
  const pageHandler = await PAGEAPI.findPage(id);
  const page = dataFormatter.deserialize(pageHandler)
  return {
    props: { page }
  }
};

export { paths, props };
