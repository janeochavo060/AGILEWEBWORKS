import Jsona from 'jsona';
import FORMAPI from '@/lib/api/forms/request';
const dataFormatter = new Jsona();

const formProps = async () => {
  const pageHandler = await FORMAPI.findForm('contact-form', '?include=blueprint');
  const page = dataFormatter.deserialize(pageHandler)
  return {
    props: { test: page }
  }
};

export { formProps };
