import { RootState } from '../store'
export const getPopularCategoriesBranch = (state: RootState) => state.сategories
export const getPopularCategories = (state: RootState) => getPopularCategoriesBranch(state).data