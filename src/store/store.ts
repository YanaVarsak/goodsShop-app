import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { categoriesReducer } from './сategoriesSlice'
import thunk from 'redux-thunk'
import { goodsReducer } from './goodsSlice'
import { cartReducer } from './cartSlice'
import { popularCategoriesReducer } from './popularGoodsSlice'

const rootReducer = combineReducers({
    сategories: categoriesReducer ,
    goods: goodsReducer,
    cart: cartReducer,
    popular: popularCategoriesReducer
})

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,  composeEnhancers (applyMiddleware(thunk)))
export type RootState = ReturnType<typeof store.getState>
