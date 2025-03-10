import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product-detail/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default RouterConfig;
