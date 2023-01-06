import USERAPI from '@/lib/api/users/request'

const paths = async () => {
  const pages = await USERAPI.getUsers();
  const paths = pages.map(page => {
    return {
      params: { id: page.id.toString() }
    }
  })
  return { paths, fallback: false }
};

const props = async (context) => {
  const id = context.params.id;
  const data = await USERAPI.findUser(id);
  return {
    props: { page: data }
  }
};

export { paths, props };
