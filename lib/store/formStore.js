import { create } from "zustand";
import { devtools } from "zustand/middleware";
const initialState = {
  formSuccessInfo: false,
  submitLoading: false,
  uploading: false,
};
let storeHandler = (set, get) => ({
  ...initialState,
  reset: () => {
    Object.keys(get()).forEach((key) => {
      if (
        !initialState.hasOwnProperty(key) &&
        typeof get()[key] !== "function" &&
        key !== "reset"
      ) {
        delete get()[key];
        // set({ [key]: [] });
      }
    });
  },
});
storeHandler = devtools(storeHandler);
const store = create(storeHandler);

export default store;
