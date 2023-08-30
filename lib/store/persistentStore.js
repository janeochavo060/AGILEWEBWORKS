import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
let storeHandler = (set, get) => ({
  locale: "en",
});
storeHandler = devtools(storeHandler);
storeHandler = persist(storeHandler, { name: "persistent" });
const store = create(storeHandler);
export default store;
