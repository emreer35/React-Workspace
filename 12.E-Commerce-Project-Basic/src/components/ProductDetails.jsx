  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useParams } from "react-router-dom";
  import { setProductById } from "../app/slices/productSlice";
  import { FaPlus } from "react-icons/fa6";
  import { FaMinus } from "react-icons/fa6";
  import { addToBasket } from "../app/slices/basketSlice";
  const ProductDetails = () => {
    const { id } = useParams();

    const { products, selectedProduct } = useSelector((store) => store.product);

    const { title, description, image, price } = selectedProduct;
    // bunu kullanma
    // const { rate, count } = selectedProduct.rating;
    const rate = selectedProduct?.rating?.rate || "N/A";
    const [amount, setAmount] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
      getProductById();
    }, [dispatch]);

    // sadece 1 tane bulacagimiz icin buna gerek yok
    // const getProductById = () => {
    //   products &&
    //     products.map((product) => {
    //       if (product.id == id) {
    //         dispatch(setProductById(product));
    //       }
    //     });
    // };

    const getProductById = () => {
      const product = products.find((product) => product.id == id);
      if (product) {
        dispatch(setProductById(product));
      }
    };

    const addBasket = () => {
      const action = {
        id: id,
        title: title,
        description: description,
        image: image,
        price: price,
        amount: amount,
      };
      dispatch(addToBasket(action));
    };
    return (
      <div className="container min-h-[calc(100vh-110px)]">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 bg-gray-50 dark:bg-gray-800 border border-gray-300 shadow-lg dark:border-gray-400 dark:shadow-md dark:shadow-gray-600 rounded-lg p-4 lg:p-8">
          <div className="lg:col-span-3 mb-4 mx-auto">
            <img
              src={image}
              className="object-contain h-96 w-full max-w-md mx-auto min-h-96 rounded-lg shadow"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col  p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 lg:mb-4">
              {title}
            </h1>
            <div className="mb-2 lg:mb-4">
              <span className="text-yellow-500 font-bold">{rate}★</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2 lg:mb-4">
              {description}
            </p>
            <p className="text-lg font-semibold text-blue-500 dark:text-blue-300 mb-2 lg:mb-4">
              ${price}
            </p>
            <div className="mb-4 flex flex-row items-center border border-gray-400 overflow-hidden rounded-lg    w-fit">
              <button
                onClick={() => setAmount(Math.max(amount - 1, 0))}
                className="bg-amber-500 text-white  rounded-s-md hover:bg-amber-600 transition px-3 py-2 "
              >
                <FaMinus />
              </button>
              <span className="dark:bg-white font-bold px-3.5 py-1 rounded">
                {amount}
              </span>
              <button
                onClick={() => setAmount(amount + 1)}
                className="bg-amber-500 text-white  rounded-e-md hover:bg-amber-600 transition px-3 py-2"
              >
                <FaPlus />
              </button>
            </div>
            <div>
              <button
                onClick={addBasket}
                className="px-2.5 py-1.5 rounded-md bg-amber-500 hover:bg-amber-600 transition text-white font-bold cursor-pointer"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProductDetails;
