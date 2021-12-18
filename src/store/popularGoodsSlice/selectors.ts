import { RootState } from '../store'
export const getPopularCategoriesBranch = (state: RootState) => state.popular
export const getPopularCategories = (state: RootState) => {
    return getPopularCategoriesBranch(state).data;
  };