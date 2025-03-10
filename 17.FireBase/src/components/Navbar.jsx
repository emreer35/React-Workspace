import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
    toast("basariyla cikis yapildi");
  };
  return (
    <div className="bg-gray-700 text-slate-200">
      <div className="flex justify-between items-center px-6 py-6 container mx-auto">
        <div className="text-2xl ">FireBase</div>
        <div
          onClick={logout}
          className="outline rounded px-2.5 py-1.5 hover:outline-none hover:bg-white hover:text-slate-800 transition"
        >
          Cikis Yap
        </div>
      </div>
    </div>
  );
};

export default Navbar;
