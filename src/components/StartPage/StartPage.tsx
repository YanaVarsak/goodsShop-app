import React, { useEffect } from "react";
import { MenuSide } from "../Menu";
import { GoodCard } from "components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  PopularCategoriesActions,
  PopularCategoriesSelextors,
} from "store/popularGoodsSlice";


export const StartPage: React.FC = () => {
  const categories = useSelector(
    PopularCategoriesSelextors.getPopularCategories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PopularCategoriesActions.fetchPopularCategories());
  }, [dispatch]);

  console.log({ categories });
  return (
    <>
      <div style={{ display: "flex", padding: "20px" }}>
        <MenuSide />
        <img
          style={{ width: "81%", height: "530px", margin: "0px 20px 60px 0px" }}
          src="https://storge.pic2.me/c/1360x800/126/59ee6feec1016.jpg"
          alt=""
        />
      </div>
      {categories.map(({ category, items }) => (
        <div >
          <h2 style={{ textAlign: "center" }}>{category.label} </h2>
          <div style={{ display: "flex" }}>
          {items.map((item) => (
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
