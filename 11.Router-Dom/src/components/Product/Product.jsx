import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, brand, name, price } = product;
    // bir yere yonlendirmek icin kullandigimiz hooks
  const navigate = useNavigate(); 
  return (
    <div className="mb-8">
      <div>Id : {id}</div>
      <div>Brand : {brand}</div>
      <div>name : {name}</div>
      <div>Price : {price}</div>
      <button onClick={()=>navigate('/product-detail/' + id)}>Go To Detail</button>
      <hr />
    </div>
  );
};

export default Product;
