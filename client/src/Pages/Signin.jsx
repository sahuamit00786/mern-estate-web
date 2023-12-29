// import React from 'react'
import OAuth from "../Components/OAoth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEnvelope, FaLock } from "react-icons/fa";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
// import OAuth from "../components/OAuth";
import { useState } from "react";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      // console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="sm:p-8">
      <div className="sm:text-4xl text-2xl mt-8 flex items-center justify-center font-bold  text-blue-900 ">
        <span className="">SignIn </span>
        <div className="h-16">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCzB7k5eqt53_0akAZILu7IbpJUJ-5_FnVg&usqp=CAU"
            alt="signin-img"
            className="h-full "
          />
        </div>
      </div>
      <div className="p-8 max-w-lg mx-auto border-1 border-slate-700 my-8 shadow-2xl">
        <h1 className="text-xl  font-semibold mb-8 text-blue-900">
          Sign in to your account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex  gap-2 relative">
            <span className="inset-y-0 flex absolute items-center pl-3">
              <FaEnvelope
                color="#334155"
                className="text-gray-500 "
                size="25"
              />{" "}
              {/* Icon */}
            </span>
            <input
              type="email"
              placeholder="Enter Your email..."
              className="border pl-12 p-3 rounded-lg w-full"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex  gap-2 relative">
            <span className="inset-y-0 flex absolute items-center pl-3">
              <FaLock color="#334155" className="text-gray-500 " size="25" />{" "}
              {/* Icon */}
            </span>
            <input
              type="password"
              placeholder="Enter the password..."
              className="border pl-12 w-full p-3 rounded-lg"
              id="password"
              onChange={handleChange}
            />
          </div>

          <button
            disabled={loading}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase shadow-[0_9px_0_rgb(203,213,225)] hover:shadow-[0_4px_0px_rgb(0,0,0)]  ease-out hover:translate-y-1 transition-all rounded"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-2 mt-5">
          <p>Dont have an account?</p>
          <Link to={"/signup"}>
            <span className="text-blue-700">Sign up</span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
}
