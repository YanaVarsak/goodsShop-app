// import { CategoriesSelectors } from "store/сategoriesSlice"
import { RootState } from "../store"
// import { createSelector } from 'reselect'

export const getGoodsBranch = (state: RootState) => state.goods

export const getGoods = (state: RootState) => getGoodsBranch(state).data.items

// export const getGoodsWithCategory = createSelector(
//     [getGoods, CategoriesSelectors.getCategories], (goods, categories) => {
//         const newGoods = goods.map((good) => ({
//             ...good,
//             category: categories.find((category: { id: any }) => category.id === good.id)?.type
//         }))
//         return newGoods
//     }
// )


