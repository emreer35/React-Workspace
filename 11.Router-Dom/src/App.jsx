import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import EmployeeAbout from "./pages/About/EmoloyeeAbout";
import CompanyAbout from "./pages/About/CompanyAbout";
import ProductDetail from "./pages/Products/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ic ice Router kismi bu skeilde tanimlaniyor ve parent elementte outlet 
        yaziyoruz  */}
        <Route path="/about" element={<About />}>
          <Route path="employee" element={<EmployeeAbout />} />
          <Route path="company" element={<CompanyAbout />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />

        {/* Eger ki hic bir sayfayi bulamazsak 404 Not Found Sayfasi icin bunu yapacagiz */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
