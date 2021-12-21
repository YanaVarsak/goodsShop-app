import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesActions, CategoriesSelectors } from "store/сategoriesSlice";

interface MenuType {
  id: string;
  type: string;
  label: string;
}

export const MenuSide: React.FC = () => {
  const menuItems = useSelector(CategoriesSelectors.getCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CategoriesActions.fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <Menu mode="vertical">
        {/*@ts-ignore */}
        {menuItems?.categories?.map((item: MenuType) => (
          <Menu.Item key={item.id}>
            <Link to={`/${(item.id)}`}> {item.label} </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};
