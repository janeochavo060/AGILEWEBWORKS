import FORMAPI from "@/lib/api/forms/request";
import globalState from "@/lib/store/globalState";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import CloudFlareRecaptcha from "@/components/partials/CloudFlareRecaptcha";
import GoogleRecaptcha from "@/components/partials/GoogleRecaptcha";
export function formSubmit({
  e,
  formId,
  token,
  sections,
  setErrors,
  formData = {},
  successCallback = () => {},
  errorCallback = () => {},
}) {
  e.preventDefault();
  globalState.setState({
    formSuccessInfo: false,
    submitLoading: true,
  });
  setErrors([]);
  const payload = {};
  const findValue = (field) => {
    switch (field.type) {
      case "file":
      case "checkbox":
        return formData?.[field.state_name] || "";
      case "select":
        if (field.multiple) return formData?.[field.state_name] || [];
      default:
        return e.target[field.state_name]?.value;
    }
  };

  sections.forEach((section) => {
    let sectionPayload = {};
    let fields = section?.fields || [];
    fields.forEach((field) => {
      sectionPayload[field.state_name] = findValue(field);
    });
    payload[section?.state_name] = sectionPayload;
  });

  payload["captcha_token"] = token;

  FORMAPI.submitForm(formId, payload)
    .then(() => {
      e.target.reset();
      globalState.setState({
        formSuccessInfo: true,
        submitLoading: false,
      });
      successCallback();
    })
    .catch((err) => {
      setErrors(err?.data?.errors || {});
      errorCallback();
      globalState.setState({
        submitLoading: false,
      });
    });
}

export function isError(errors, stateName, field) {
  const index = stateName + "." + field;
  const data = errors?.[index];
  return data?.[0]?.replace(stateName + ".", "") || "";
}

export function RenderCaptcha({ setToken }) {
  const { formSetting } = globalData;
  if (formSetting?.provider) {
    return formSetting.provider === "google_recaptcha" ? (
      <GoogleRecaptcha setToken={setToken} sitekey={formSetting.site_key} />
    ) : (
      <CloudFlareRecaptcha setToken={setToken} sitekey={formSetting.site_key} />
    );
  }
  return;
}
