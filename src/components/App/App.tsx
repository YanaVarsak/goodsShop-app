import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "store";
import { StartPage } from "../StartPage";
import { CategoryPage } from "../CategoryPage";
import { ProductPage } from "../ProductPage";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { GoodsPage } from "components/GoodsPage";

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/:id/:id" element={<ProductPage />} />
        <Route path="/:id" element={<CategoryPage />} />
        <Route path="/goods" element={<GoodsPage />} />
      </Routes>
     

      <Footer />
    </Provider>
  );
};
