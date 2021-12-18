import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { GoodCard } from "components/Card";
import {
  PopularCategoriesActions,
  PopularCategoriesSelextors,
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
    PopularCategoriesSelextors.getPopularCategories
  );
  const { typeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!typeId) {
      return;
    }

    // const categoryParams = "ids=" + typeId;
    // const goodsParams = "categoryTypeIds=" + typeId;

    dispatch(PopularCategoriesActions.fetchPopularCategories());
  }, [dispatch, typeId]);

  const navigate = useNavigate();
  function handleClick() {
    navigate("-1");
  }

  if (!typeId) {
    return (
      <div >
        Категория не найдена, вернуться
        <Link to="/" onClick={handleClick}> назад
        </Link>
      </div>
    );
  }
  return (
    <>
      {/* {categories.map((item: GoodsMap) => (
        <Link to={`${item.id}/${item.id}`} key={item.id}>
          <GoodCard
            id={item.id}
            label={item.label}
            price={item.price}
            img={item.img}
            description={item.description}
          />
        </Link>
      ))} */}
    </>
  );
};
