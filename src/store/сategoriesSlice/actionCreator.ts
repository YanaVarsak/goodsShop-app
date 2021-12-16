import { CATEGORIES_ACTIONS } from './constants'
import { Categories } from './types'
import { Dispatch } from 'react'
import { Api } from '../../api'


export const getCategories = () => ({ type: CATEGORIES_ACTIONS.GET_CATEGORIES })
export const getCategoriesSuccess = (categories: Categories[]) => ({
    type:CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS,
    payload:categories
})

export const getCategoriesFailure = () => ({ type: CATEGORIES_ACTIONS.GET_CATEGORIES_FAILURE
})

export const fetchCategories = () => async(dispatch: Dispatch<any>) => {
    dispatch(getCategories())
    new Api().getDataCategory().then((data) => dispatch(getCategoriesSuccess(data))).catch(() => dispatch(getCategoriesFailure()))
}


