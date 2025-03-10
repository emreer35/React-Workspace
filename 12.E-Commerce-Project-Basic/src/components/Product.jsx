import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, description, image, rating, price } = product;
  const { rate, count } = rating;

  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => navigate("/product-details/" + id)}
      className=" bg-gray-50 dark:bg-gray-800 border border-gray-300 shadow-lg dark:border-gray-400 dark:shadow-md dark:shadow-gray-600 rounded-lg p-4 flex flex-col justify-between h-full transition-transform transform hover:scale-105 cursor-pointer"
    >
      <div>
        {/* image */}
        <img
          src={image}
          alt={title}
          className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto"
        />
        {/* Product information*/}
        <div className="text-center mt-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
            {title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
            {description}
          </p>
          <div className="flex justify-center items-center mt-3 space-x-2">
            <span className="text-yellow-500 font-bold">{rate}★</span>
            <span className="text-gray-600 dark:text-gray-300">({count})</span>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="text-lg font-semibold text-blue-500 dark:text-blue-300 mt-4 text-center">
        ${price}
      </div>
    </div>
  );
};

export default Product;
