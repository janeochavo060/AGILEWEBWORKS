import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  year_month: "",
  sort: "-published_at",
  meta: {},
  allCollections: [],
  isLoading: false,
  setIsLoading: (data) => set(() => ({ isLoading: data })),
  setAllCollections: (data) => set(() => ({ allCollections: data })),
  setMeta: (data) => set(() => ({ meta: data })),
  setSort: (data) => set(() => ({ sort: data })),
});

const useArticleFilterStore = create(devtools(store));

export default useArticleFilterStore;
