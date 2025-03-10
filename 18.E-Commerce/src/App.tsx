import Spinner from "./components/layouts/Spinner";
import RouterConfig from "./routers/RouterConfig";
import { Slide, ToastContainer } from "react-toastify";
import Navbar from "./components/layouts/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductService from "./services/ProductService";
import { ProductType, UserType } from "./types/Type";
import { setCurrentUser, setProducts } from "./app/reducers/AppSlice";
import { setBasket } from "./app/reducers/BasketSlice";
import Drawer from "./components/ui/DrawerComponent";

const App = () => {
  const dispatch = useDispatch();

  const getAllProducts = async () => {
    const products: ProductType[] = await ProductService.getAllProducts();
    dispatch(setProducts(products));
  };
  useEffect(() => {
    getAllProducts();
  }, [dispatch]);

  useEffect(() => {
    const currentUserString: string | null =
      localStorage.getItem("currentUser");
    if (currentUserString) {
      const currentUser: UserType = JSON.parse(currentUserString) as UserType;
      dispatch(setCurrentUser(currentUser));
    }
  }, []);

  const getAllBasket = () => {
    const basketString: string | null = localStorage.getItem("basket");
    if (basketString) {
      const basket: ProductType[] = JSON.parse(basketString) as ProductType[];
      dispatch(setBasket(basket));
    }
  };

  useEffect(() => {
    getAllBasket();
  }, []);

  return (
    <>
      <Navbar />
      <RouterConfig />
      <ToastContainer
        position="top-right"
        closeOnClick={true}
        autoClose={2000}
        transition={Slide}
      />
      <Spinner />
      <Drawer />
    </>
  );
};

export default App;
