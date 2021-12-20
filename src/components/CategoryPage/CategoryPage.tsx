import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { GoodCard } from "components/Card";
import {
  PopularCategoriesActions,
  PopularCategoriesSelectors,
} from "store/popularGoodsSlice";

interface GoodsMap {
  label: string;
  price: number;
  img: string;
  categoryTypeId: string;
  id: string;
  description: string;
}

export const CategoryPage: React.FC = () => {
  const categories = useSelector(
    PopularCategoriesSelectors.getPopularCategories
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }


    dispatch(PopularCategoriesActions.fetchPopularCategories());
  }, [dispatch, id, ]);

  const navigate = useNavigate();
  function handleClick() {
    navigate("-1");
  }

  if (!id || !categories) {
    return (
      <div>
        Категория не найдена, вернуться
        <Link to="/" onClick={handleClick}> назад
        </Link>
      </div>
    );
  } else 
  return (
    <>
   {categories.map(({ category, items }) => (
        <div >
          <h2 style={{ textAlign: "center" }}>{category.label} </h2>
          <div style={{ display: "flex" }}>
          {items.map((item) => (
             
            <GoodCard 
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
