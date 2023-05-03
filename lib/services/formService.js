import FORMAPI from "@/lib/api/forms/request";
import globalState from "@/lib/store/globalState";
export function formSubmit(
  e,
  id,
  sections,
  setErrors,
  successCallback = () => {},
  errorCallback = () => {}
) {
  e.preventDefault();
  setErrors([]);
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
    .then(() => {
      e.target.reset();
      globalState.setState({
        formSuccessInfo: true,
      });
      successCallback();
    })
    .catch((err) => {
      setErrors(err?.data?.errors || {});
      errorCallback();
    });
}

export function isError(errors, stateName, field) {
  const index = stateName + "." + field;
  const data = errors?.[index];
  return data?.[0]?.replace(stateName + ".", "") || "";
}
