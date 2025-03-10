import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      // const auth = getAuth();
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("Kullanici Basariyla Olusturuldu");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const login = response.user;
      if (login) {
        toast.success("basarili bir sekilde giris yapti");
        navigate("/");  
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-20">
        <div className="min-w-lg">
          <div className="text-3xl font-semibold text-center mb-8">Login</div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            className="w-full outline-none border border-gray-300 rounded text-slate-800 px-2.5 py-1.5 focus:ring focus:ring-gray-500 mb-4"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="w-full outline-none border border-gray-300 rounded text-slate-800 px-2.5 py-1.5 focus:ring focus:ring-gray-500 mb-4"
          />
          <div className="flex flex-col">
            <button className="bg-red-500 text-white hover:bg-white hover:text-red-500 hover:outline hover:outline-red-500 flex items-center justify-center px-2.5 py-1.5 rounded font-semibold mb-4 transition cursor-pointer">
              <FaGoogle className="me-2" /> Google ile giris{" "}
            </button>
            <hr className="mb-4 text-slate-300" />
            <button onClick={login} className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:outline hover:outline-blue-500 flex items-center justify-center px-2.5 py-1.5 rounded font-semibold mb-2 transition cursor-pointer">
              Giris Yap
            </button>
            <button
              onClick={register}
              className="bg-green-500 text-white hover:bg-white hover:text-green-500 hover:outline hover:outline-green-500 flex items-center justify-center px-2.5 py-1.5 rounded font-semibold transition cursor-pointer"
            >
              Kayit Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
