import Product from "../../components/Product/Product";
import { products } from "../../data/products";

function Products() {
  return (
    <div>
      <div className="text-2xl">Products</div>

      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Products;
