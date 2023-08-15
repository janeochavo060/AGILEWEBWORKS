import { create } from "zustand";
import { devtools } from "zustand/middleware";
let storeHandler = () => ({
  formSuccessInfo: false,
  submitLoading: false,
  uploading: false,
  captcha: {},
});
storeHandler = devtools(storeHandler);
const store = create(storeHandler);

export default store;
