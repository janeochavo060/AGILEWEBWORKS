import { create } from "zustand";
export default create(() => ({
  showLazy: process.env.NODE_ENV === "development" ? false : false,
  formSuccessInfo: false,
  submitLoading: false,
  uploading: false,
  captcha: {},
  ready: false,
}));
