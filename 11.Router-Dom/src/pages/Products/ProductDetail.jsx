import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import Product from "../../components/Product/Product";

const ProductDetail = () => {
  // use params ile Router daki :id olani yakaliyoruz
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-4xl text-gray-600">Product Detail</h1>
      <div>
        {products &&
          products.map((product) => {
            if (product.id == id) {
              return <Product key={id} product={product} />;
            }
          })}
      </div>
    </div>
  );
};

export default ProductDetail;
