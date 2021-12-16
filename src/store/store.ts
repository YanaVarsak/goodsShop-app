import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './сategoriesSlice'
import thunk from 'redux-thunk'
import { goodsReducer } from './goodsSlice'
import { cartReducer } from './cartSlice'

const rootReducer = combineReducers({
    сategories: categoriesReducer ,
    goods: goodsReducer,
    cart: cartReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
