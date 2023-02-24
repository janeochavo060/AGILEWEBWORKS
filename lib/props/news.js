import Jsona from 'jsona';
const dataFormatter = new Jsona();
import COLLECTIONAPI from '@/lib/api/collection/request';

const paths = async () => {
  const newsHandler = await COLLECTIONAPI.getCollections('news')
  const news = dataFormatter.deserialize(newsHandler)
  const paths = news.map(e => {
    return {
      params: { id: e.id }
    }
  })
  return { paths, fallback: 'blocking' }
};

const props = async (context) => {
  const entryId = context?.params?.id
  const pageHandler = entryId ? 
    await COLLECTIONAPI.findEntry('news', entryId) :
    await COLLECTIONAPI.findCollection('news');
  const page = dataFormatter.deserialize(pageHandler);
  return {
    props: { page },
    revalidate: 10,
  };
};

export { paths, props };
