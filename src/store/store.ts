import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './сategoriesSlice'
import thunk from 'redux-thunk'
import { goodsReducer } from './goodsSlice'
import { cartReducer } from './cartSlice';

const rootReducer = combineReducers({
    сategories: categoriesReducer ,
    goods: goodsReducer,
    // не подключила слайс корзины
    cart: cartReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

// сначала создаем переменнуб (в данном случае store) и только после этого обращаемся к ней, а не наоборот
export type RootState = ReturnType<typeof store.getState>
