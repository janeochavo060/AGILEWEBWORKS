import FORMAPI from "@/lib/api/forms/request";
import globalState from "@/lib/store/globalState";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import CloudFlareRecaptcha from "@/components/partials/CloudFlareRecaptcha";
import GoogleRecaptcha from "@/components/partials/GoogleRecaptcha";
export function formSubmit(
  e,
  id,
  token,
  sections,
  setErrors,
  successCallback = () => {},
  errorCallback = () => {}
) {
  e.preventDefault();
  globalState.setState({
    formSuccessInfo: false,
  });
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

  payload["captcha_token"] = token;

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

export function RenderCaptcha({ setToken }) {
  const { formSetting } = globalData;
  return formSetting.provider === "google_recaptcha" ? (
    <GoogleRecaptcha setToken={setToken} sitekey={formSetting.site_key} />
  ) : (
    <CloudFlareRecaptcha setToken={setToken} sitekey={formSetting.site_key} />
  );
}
