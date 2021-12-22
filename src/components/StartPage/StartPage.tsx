import React, { useEffect } from "react";
import { MenuSide } from "../Menu";
import { GoodCard } from "components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  PopularCategoriesActions,
  PopularCategoriesSelectors,
} from "store/popularGoodsSlice";


export const StartPage: React.FC = () => {
  const categories = useSelector(
    PopularCategoriesSelectors.getPopularCategories
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
          style={{ width: "75%", height: "550px", margin: "0px 0px 30px 100px" }}
          src="https://source.unsplash.com/random"
          alt=""
        />
      </div>
      {categories.map(({ category, items }) => (
        <div  style={{marginLeft: "30px", marginRight: "30px"}} key={category.id}>
          <h2 style={{ textAlign: "center" }}>{category.label} </h2>
          <div style={{ display: "flex", justifyContent:"space-between"}}>
          {items.slice(1,6).map((item) => (
            <GoodCard 
            key={item.id}
              id={item.id}
              label={item.label}
              price={item.price}
              img={item.img}
              description={item.description}
            ></GoodCard>
          ))}
          </div>
        </div>
      ))}
    </>
  );
};
