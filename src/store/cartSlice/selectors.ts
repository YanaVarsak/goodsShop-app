import { RootState } from "../store"
export const getCartBranch = (state: RootState) => state.cart
export const getCart = (state: RootState) => getCartBranch(state).data.carts