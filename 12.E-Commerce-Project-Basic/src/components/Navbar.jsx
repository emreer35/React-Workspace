import Logo from "../assets/images/logo.png";
import { IoIosSearch } from "react-icons/io";
import DarkModeToggle from "./DarkModeToggle";
import { CiShoppingBasket } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../app/slices/basketSlice";
import { setSearchTerm } from "../app/slices/productSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.basket);
  const { searchTerm } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-200 dark:bg-gray-700 px-12 dark:border dark:border-b-gray-400 rounded-b-xl">
      <div className="flex items-center  justify-between">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img width={60} height={60} src={Logo} />
        </div>
        <div className="flex items-center gap-6 ">
          <DarkModeToggle />
          <div className="flex items-center px-2.5 py-1.5 rounded-md border-b-2 border-gray-500 dark:border-gray-200   overflow-hidden max-w-md ">
            <IoIosSearch className="mr-3 rotate-90 h-6 w-6 text-slate-800 dark:text-white" />
            <input
              type="text"
              placeholder="Ara"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              className="w-full outline-none bg-transparent text-slate-800 dark:text-white text-sm"
            />
          </div>
          <Badge
            className="cursor-pointer"
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="error"
          >
            <CiShoppingBasket className=" h-6 w-6 text-slate-800 dark:text-white" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
