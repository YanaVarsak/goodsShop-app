import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GoodsActions, GoodsSelectors } from "store/goodsSlice";
import { CartActions, CartSelectors } from "store/cartSlice";
import { Button } from "antd";

export function ProductPage() {
  const { id } = useParams();
  const goods = useSelector(GoodsSelectors.getGoods);
  const cart = useSelector(CartSelectors.getCart);
  const good = goods[0];
  const dispatch = useDispatch();
  useEffect(() => {
   
    dispatch(GoodsActions.fetchGoods({ids:id}));
  }, [dispatch, id]);

  const isGoodInCart = () => {
    const cartItem = cart.find((item) => {
      return item.id === good.id;
    });
    return cartItem;
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate("-1");
  }

  const addProdToCart = () => {
      
    dispatch(CartActions.putFetchCart(good));
  };

  function deleteProdInCart(): void {

    dispatch(CartActions.deleteFetchCart(good));
  }

  const deleteButton = (
    <Button onClick={deleteProdInCart}> Удалить из корзины </Button>
  );
  const addButton = (
    <Button onClick={addProdToCart}> Добавить в корзину </Button>
  );
  if (!id || !good) {
    return (
      <div style={{ display: "flex", textAlign:"center" }} >
        Продукт не найден, вернуться <Link to="/" onClick={handleClick}>  назад
        </Link>
      </div>
    );
  }
  return (
  
    <>
    <div> {good.label}</div>
    <div> {isGoodInCart() ? deleteButton : addButton}</div>
    </>
  )
}
