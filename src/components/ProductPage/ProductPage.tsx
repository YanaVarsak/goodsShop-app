import React, { useEffect } from "react";
import { GoodCard } from "components/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GoodsActions, GoodsSelectors } from "store/goodsSlice";

export function ProductPage() {
  const { id } = useParams();
  const goods = useSelector(GoodsSelectors.getGoods);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GoodsActions.fetchGoods());
  }, [dispatch,id]);



  const navigate = useNavigate();

  function handleClick() {
    navigate("-1");
  }
  if (!id || !goods) {
    return (
      <div>
        Продукт не найден, вернуться
        <Link to="/" onClick={handleClick}>
          назад
        </Link>
      </div>
    );
  }
  return (
    <>
      {goods.map((good) => (
        <GoodCard
          id={good.id}
          label={good.label}
          price={good.price}
          img={good.img}
          description={good.description}
        />
      ))}
    </>
  );
}
