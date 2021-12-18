import { CART_ACTIONS } from './constants'
import { Cart } from './types'
import { Api } from '../../api'
import { Dispatch } from 'react'

export const getCart = () => ({ type: CART_ACTIONS.GET_CART })

export const getCartSuccess = (cart: Cart[]) => ({
    type: CART_ACTIONS.GET_CART_SUCCESS,
    payload: cart
})

export const CartFailure = () => ({ type: CART_ACTIONS.CART_FAILURE })

export const getFetchCart = () => async (dispatch: Dispatch<any>) => {
    dispatch(getCart())
    new Api().getDataCart().then((data) => dispatch(getCartSuccess(data))).catch(() => dispatch(CartFailure()))
}