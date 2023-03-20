import { create } from 'zustand'

const useArticleFilterStore = create((set) => ({
  year_month: ''
}))

export default useTodoStore