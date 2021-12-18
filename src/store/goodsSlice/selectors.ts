import { RootState } from "../store"
export const getGoodsBranch = (state: RootState) => state.goods

export const getGoods = (state: RootState) => getGoodsBranch(state).data