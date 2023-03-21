import { create } from 'zustand'

const useArticleFilterStore = create((set) => ({
  year_month: '',
  sort: '-published_at',
  meta: {},
  allCollections: [],
  isLoading: false,
  setIsLoading: (data) => set(() => ({isLoading: data})),
  setAllCollections: (data) => set(() => ({allCollections: data})),
  setMeta: (data) => set(() => ({meta: data})),
  setSort: (data) => set(() => ({sort: data})),
}))

export default useArticleFilterStore