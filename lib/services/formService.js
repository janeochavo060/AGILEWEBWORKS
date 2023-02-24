import FORMAPI from "@/lib/api/forms/request"
export function formSubmit (e, id, sections) {
  e.preventDefault();
  const payload = {};
  sections.map((section) => {
    let sectionPayload = {};
    let fields = section?.fields || [];
    fields.map(
      (field) =>
        (sectionPayload[field.state_name] = e.target[field.state_name].value)
    );
    payload[section?.state_name] = sectionPayload;
  });
  FORMAPI.submitForm(id, payload)
  .then((res) => {
    console.log({ res });
    e.target.reset();
  })
  .catch((err) => {
    console.log({ err });
  });
};