import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { GoodCard } from "components/Card";
import { GoodsActions, GoodsSelectors } from "store/goodsSlice";

export const CategoryPage: React.FC = () => {
  const goods = useSelector(GoodsSelectors.getGoods);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(GoodsActions.fetchGoods({categoryTypeIds:id}));
  }, [dispatch, id]);

  const navigate = useNavigate();
  function handleClick() {
    navigate("-1");
  }
console.log(goods)
  if (!id || !goods.length) {
    return (
      <div>
        Категория не найдена, вернуться
        <Link to="/" onClick={handleClick}>
          {" "}
          назад
        </Link>
      </div>
    );
  }
  return (
    <>
      {goods.map((item) => (
        <GoodCard
        key={item.id}
          id={item.id}
          label={item.label}
          price={item.price}
          img={item.img}
          description={item.description}
        ></GoodCard>
      ))}
    </>
  );
};
