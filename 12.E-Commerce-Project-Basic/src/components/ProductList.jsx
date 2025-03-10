import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../app/slices/productSlice";
import LoadingSpinner from "./LoadingSpinner";
import Product from "./Product";

const ProductList = () => {
  // fonksiyonlara erismek icin bunu kullaniyoruz useDispatch
  const dispatch = useDispatch();
  // initial state degerine erismek icin useSelector
  const { products, loading, searchTerm } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // filtreleme islemini yap

  const filterByTitle = products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filterByTitle.length > 0 ? (
        filterByTitle.map((product) => {
          return <Product key={product.id} product={product} />;
        })
      ) : (
        <p className="text-center col-span-4 text-gray-600 dark:text-gray-300">
          Aradığınız ürün bulunamadı.
        </p>
      )}
    </div>
  );
};

export default ProductList;
