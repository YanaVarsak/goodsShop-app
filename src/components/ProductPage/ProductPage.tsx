import React, { useEffect } from "react";
import { GoodCard } from "components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { GoodsActions, GoodsSelectors } from "store/goodsSlice";

interface ProductsPageType {
  category_type: string,
  id: number,
}
export const ProductPage: React.FC = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GoodsActions.fetchGoods())
  },[])

  const goods = useSelector(GoodsSelectors.getGoodsBranch)
  // TODO: достатоно только id, т.к. они теперь уникальны
  const { type, id } = useParams();
  const navigate = useNavigate();

  // TODO больше не ищем в моках, а дергаем на маунте санку передавая id, которая дернет апи передавая id, апи сходит в ручку /goods
  // Делать по аналогии с категорями для менб, только что тут пробрасываем id, который взяла из useParams
  const good = goods.data.find((el: ProductsPageType) => el.category_type === type && (el.id).toString() === id)


  function handleClick() {
    navigate("-1");
  }
  if (!good) {
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
    <Link to={`${type}/${good.id}`}>
        <GoodCard
          id={good.id}
          label={good.label}
          price={good.price}
          img={good.img}
          category_type={good.category_type}
          discription={good.description}
        />
        </Link>
  );
};




