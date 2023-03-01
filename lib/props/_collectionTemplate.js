import Jsona from 'jsona';
const dataFormatter = new Jsona();
import COLLECTIONAPI from '@/lib/api/collection/request';

const paths = async () => {
  const collectionsHandler = await COLLECTIONAPI.getCollections('collection')
  const collections = dataFormatter.deserialize(collectionsHandler)
  const paths = collections.map(e => {
    return {
      params: { id: e.id }
    }
  })
  return { paths, fallback: 'blocking' }
};

const props = async (context) => {
  const entryId = context?.params?.id
  const pageHandler = entryId ? 
    await COLLECTIONAPI.findEntry('collections', entryId) :
    await COLLECTIONAPI.findCollection('collections');
  const page = dataFormatter.deserialize(pageHandler);
  return {
    props: { page },
    revalidate: 10,
  };
};

export { paths, props };
