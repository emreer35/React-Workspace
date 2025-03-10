import { Chip, Divider, Drawer } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import PageContainer from "./layouts/PageContainer";
import Router from "./router/Router";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { decrement, increment, setDrawer } from "./app/slices/basketSlice";
function App() {
  const dispatch = useDispatch();

  const { products, drawer } = useSelector((store) => store.basket);
  const totalPrice = products.reduce(
    (total, product) => total + product.amount * product.price,
    0
  );

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <PageContainer>
        <Router />
        <Drawer
          open={drawer}
          onClose={() => dispatch(setDrawer())}
          anchor="right"
        >
          <div className=" px-6 py-4  text-2xl font-semibold text-gray-800">
            Sepetim
          </div>
          <Divider style={{ marginBottom: "1rem" }}>
            <Chip label="Sepet" size="small" />
          </Divider>
          {products &&
            products.map((product) => {
              return (
                <div className="w-auto px-6">
                  <div className="mb-4 flex gap-4 justify-between">
                    <img
                      className="object-contain p-2 shadow border border-gray-300"
                      width={60}
                      height={60}
                      src={product.image}
                    />
                    <div>
                      <h1 className="truncate w-80 whitespace-nowrap overflow-hidden text-ellipsis font-semibold text-gray-800">
                        {product.title}
                      </h1>
                      <p className="truncate w-80 whitespace-nowrap overflow-hidden text-ellipsis font-light text-gray-600">
                        {product.description}
                      </p>
                    </div>
                    <div>
                      <div className=" flex flex-row  items-center  overflow-hidden rounded-lg w-fit">
                        <button
                          onClick={() => dispatch(decrement(product.id))}
                          className="bg-amber-500 text-white  rounded-s-md hover:bg-amber-600 transition px-1.5 py-1 "
                        >
                          <FaMinus />
                        </button>
                        <span className="dark:bg-white font-bold px-3 py-1 rounded w-10 text-center">
                          {product.amount}
                        </span>
                        <button
                          onClick={() => dispatch(increment(product.id))}
                          className="bg-amber-500 text-white  rounded-e-md hover:bg-amber-600 transition px-1.5 py-1"
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <div className="text-center font-semibold mt-1">
                        ${(product.price * product.amount).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="p-6">
            <div className="flex justify-between items-center gap-8">
              <span className=" text-lg font-semibold">Sepet Toplam</span>
              <div className="text-lg font-semibold">
                ${totalPrice.toFixed(2)}
              </div>
            </div>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
