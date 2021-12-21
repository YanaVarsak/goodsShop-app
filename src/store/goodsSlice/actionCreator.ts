import { GOODS_ACTIONS } from "./constants";
import { Good } from "./types";
import { Api } from "../../api";
import { Dispatch } from "react";


export const getGoods = () => ({ type: GOODS_ACTIONS.GET_GOODS });

export const getGoodsSuccess = (goods: Good[]) => ({
  type: GOODS_ACTIONS.GET_GOODS_SUCCESS,
  payload: goods,
});

export const getGoodsFailure = () => ({
  type: GOODS_ACTIONS.GET_GOODS_FAILURE,
});

export const fetchGoods = (params?: Parameters<typeof Api.prototype.getDataGoods>[0]) =>
  async function (dispatch: Dispatch<any>) {
    dispatch(getGoods());
    new Api()
      .getDataGoods(params)
      .then((data) => dispatch(getGoodsSuccess(data)))
      .catch(() => dispatch(getGoodsFailure()));
  };
