import React, { useEffect } from "react";
import { MenuSide } from "../Menu";
import { GoodCard } from "components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoodsActions, GoodsSelectors } from "store/goodsSlice";

export const StartPage: React.FC = () => {
  const goods = useSelector(GoodsSelectors.getGoods)
  const dispatch = useDispatch()
  useEffect(() => {
    // ТУТ ПЕРЕДЕЛАТЬ, нам нужны не товары, а популярные категории на стартовой странице
    dispatch(GoodsActions.fetchGoods())
  },[])

  console.log({ goods });

  return (
    <>
      <div style={{ display: "flex", padding: "20px" }}>
        <MenuSide />
        <img
          style={{ width: "81%", height: "470px" }}
          src="https://storge.pic2.me/c/1360x800/126/59ee6feec1016.jpg"
          alt=""
        />
      </div>
      {/* У кудсов нет никаких items, goods и есть items. Ты же сама писала тип на Godd */}
      {goods.map((item) => (
        // При мапинге ВСЕГДА проставялем key
        <div key={item.id}>
          <h2 style={{ textAlign: "center" }}>{item.label} </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
              <Link to={`/${item.category_type}/${item.id}`}>
                <GoodCard
                  id={item.id}
                  label={item.label}
                  price={item.price}
                  img={item.img}
                  category_type={item.category_type}
                  discription={item.description}
                ></GoodCard>
              </Link>
          </div>
        </div>
      ))}
    </>
  );
};
