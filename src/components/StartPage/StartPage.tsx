import React, { useEffect } from "react";
import { MenuSide } from "../Menu";
import { GoodCard } from "components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  PopularCategoriesActions,
  PopularCategoriesSelextors,
} from "store/popularGoodsSlice";
import { GoodsActions, GoodsSelectors } from "store/goodsSlice";

export const StartPage: React.FC = () => {
  const categories = useSelector(
    PopularCategoriesSelextors.getPopularCategories
  );
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(PopularCategoriesActions.fetchPopularCategories());
  }, [Dispatch]);
  const goods = useSelector(GoodsSelectors.getGoods);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GoodsActions.fetchGoods());
  }, [dispatch]);
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
      {categories.map((image) => (
        <div>
          <h2 style={{ textAlign: "center" }}>{image.label} </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {goods.map((item) => (
              <Link to={`/${item.id}`} key={item.id}>
                <GoodCard
                  id={item.id}
                  label={item.label}
                  price={item.price}
                  img={item.img}
                  description={item.description}
                ></GoodCard>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
