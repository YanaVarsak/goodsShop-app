import React, { useEffect } from "react";
import { MenuSide } from "../Menu";
import { GoodCard } from "components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
          style={{ width: "84%", height: "530px", margin: "0px 0px 60px 0px" }}
          src="https://storge.pic2.me/c/1360x800/126/59ee6feec1016.jpg"
          alt=""
        />
      </div>
      {categories.map(({ category, items }) => (
        <div  style={{marginLeft: "30px", marginRight: "30px"}} >
          <h2 style={{ textAlign: "center" }}>{category.label} </h2>
          <div style={{ display: "flex", justifyContent:"space-between"}}>
          {items.slice(1,6).map((item) => (
             <Link to={`/${item.label}/${item.id}`} key={item.id}>
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
