import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Router;
