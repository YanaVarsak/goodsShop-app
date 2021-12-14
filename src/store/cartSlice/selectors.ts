import { RootState } from "../store"

// Селектор слайса должен возвращать слайс, а не просто стейт
export const getCartBranch = (state: RootState) => state.cart

export const getCart = (state: RootState) => getCartBranch(state).data
