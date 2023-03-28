import { create } from "zustand";
import { devtools } from "zustand/middleware";
import COLLECTIONAPI from "@/lib/api/collection/request";
import Jsona from "jsona";
const dataFormatter = new Jsona();
const store = (set, get) => ({
  year: "",
  month: "",
  region: "",
  publishedAtYearMonth: "",
  isLoading: false,
  allCollections: [],
  meta: {},
  sort: "-published_at",
  months: [
    {
      value: "01",
      label: "January",
    },
    {
      value: "02",
      label: "February",
    },
    {
      value: "03",
      label: "March",
    },
    {
      value: "04",
      label: "April",
    },
    {
      value: "05",
      label: "May",
    },
    {
      value: "06",
      label: "June",
    },
    {
      value: "07",
      label: "July",
    },
    {
      value: "08",
      label: "August",
    },
    {
      value: "09",
      label: "September",
    },
    {
      value: "10",
      label: "October",
    },
    {
      value: "11",
      label: "November",
    },
    {
      value: "12",
      label: "December",
    },
  ],
  order: [
    {
      value: "-published_at",
      label: "Newest First",
    },
    {
      value: "published_at",
      label: "Oldest First",
    },
    {
      value: "title",
      label: "Title A-Z",
    },
    {
      value: "-title",
      label: "Title Z-A",
    },
  ],
  updateAllCollections: (data) => set(() => ({ allCollections: data })),
  years: () => {
    const date = new Date();
    let currentYear = date.getFullYear();
    let y = [];
    for (let index = 1; index <= 10; index++) {
      y.push({
        value: currentYear,
        label: currentYear,
      });
      currentYear = --currentYear;
    }
    return y;
  },
  sortBy: (data) => set(() => ({ sort: data?.value || "-published_at" })),
  regionChanged: (data) => set(() => ({ region: data?.value || "" })),
  yearChanged: (data) => {
    set(() => ({ year: data?.value || "" }));
    if (data?.value) {
      set((state) => ({
        publishedAtYearMonth:
          data?.value + (state.month ? `,${state?.month}` : ""),
      }));
    } else {
      set(() => ({ month: "", publishedAtYearMonth: "" }));
    }
  },
  monthChanged: (data) => {
    set((state) => ({
      month: data?.value || "",
      publishedAtYearMonth: state.year + (data?.value ? `,${data.value}` : ""),
    }));
  },
  updateMeta: (data) => {
    set(() => ({ meta: data }));
  },
  loadMore: (id, page_size) => {
    if (get().meta?.current_page < get().meta?.last_page) {
      set(() => ({ isLoading: true }));
      COLLECTIONAPI.getCollections(
        id,
        `?page[size]=${page_size}&sort=${get().sort}&page[number]=${
          get().meta?.current_page + 1
        }&filter[published_at_year_month]=${
          get().publishedAtYearMonth
        }&filter[taxonomies][regions]=${get().region}`
      ).then((res) => {
        const newCollections = dataFormatter.deserialize(res);
        const mergedCollections = [...get().allCollections, ...newCollections];
        set(() => ({ allCollections: mergedCollections, isLoading: false }));
        if (res?.meta) {
          set(() => ({ meta: res.meta }));
        }
      });
    }
  },
});

const useArticleFilterStore = create(devtools(store));

export default useArticleFilterStore;
