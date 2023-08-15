import { create } from "zustand";
export default create(() => ({
  showLazy: true,
  formSuccessInfo: false,
  submitLoading: false,
  uploading: false,
  captcha: {},
}));
