import { PageHeader, Divider, Input, Badge } from "antd";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import { createFromIconfontCN } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CartActions, CartSelectors } from "store/cartSlice";
const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});
const { Search } = Input;
export const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CartActions.getFetchCart());
  }, [dispatch]);

  const cart = useSelector(CartSelectors.getCart);

  const cartOnClick = () => {};
  return (
    <>
      <div className={css.header}>
        <Link to="/">
          <PageHeader
            style={{ display: "flex", justifyContent: "space-between" }}
            title="Good shop"
          >
            <Link to="/goods">
              <div> All goods</div>
            </Link>

            <Search
              placeholder="Введите название товара"
              style={{ width: 500 }}
            />
            <Badge count={cart.length || null}>
              <button
                style={{ backgroundColor: "white", border: "none" }}
                onClick={cartOnClick}
              >
                <IconFont
                  style={{ fontSize: 24, textAlign: "center" }}
                  type="icon-shoppingcart"
                />
              </button>
            </Badge>
          </PageHeader>
          <Divider />
        </Link>
      </div>
    </>
  );
};
