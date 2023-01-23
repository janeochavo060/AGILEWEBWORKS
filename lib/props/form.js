import Jsona from 'jsona';
import FORMAPI from '@/lib/api/forms/request';
const dataFormatter = new Jsona();

const formProps = async () => {
  const formHandler = await FORMAPI.findForm("contact", "?include=blueprint");
  const form = dataFormatter.deserialize(formHandler);

  return {
    props: { form },
  };
};

export { formProps };
