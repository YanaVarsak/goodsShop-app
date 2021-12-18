import { RootState } from "../store"
export const getCategoriesLoadStatus = (state:RootState) => state.сategories.loadStatus

export const getCategoriesBranch = (state: RootState) => state.сategories

export const getCategories = (state: RootState) => getCategoriesBranch(state).data