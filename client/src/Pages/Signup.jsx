// import React from 'react'
import { useState } from "react";
import OAuth from "../Components/OAoth";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="sm:p-8">
      <div className="sm:text-4xl text-2xl mt-8 flex items-center justify-center font-bold  text-blue-900 h-20">
        <span className="">SignUp </span>
        <div className="h-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbTx54Ln6zCLO5ih_0dfcwDeKTaUsoxMUUg&usqp=CAU"
            alt="signin-img"
            className="h-full "
          />
        </div>
      </div>
      <div className="p-8 max-w-lg mx-auto border-1 border-slate-700 my-8 shadow-2xl">
        <h1 className="text-xl  font-semibold mb-8 text-blue-900">
          Sign Up to your account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex  gap-2 relative">
            <span className="inset-y-0 flex absolute items-center pl-3">
              <FaUser color="#334155" className="text-gray-500 " size="25" />{" "}
              {/* Icon */}
            </span>
            <input
              type="text"
              placeholder="Enter Your username..."
              className="border w-full pl-12 p-3 rounded-lg"
              id="username"
              onChange={handleChange}
            />
          </div>
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
              className="border w-full pl-12 p-3 rounded-lg"
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
              className="border w-full pl-12 p-3 rounded-lg"
              id="password"
              onChange={handleChange}
            />
          </div>

          <button
            disabled={loading}
            className="bg-slate-700 mb-2 text-white p-3 rounded-lg uppercase shadow-[0_9px_0_rgb(203,213,225)] hover:shadow-[0_4px_0px_rgb(0,0,0)]  ease-out hover:translate-y-1 transition-all rounded"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to={"/signin"}>
            <span className="text-blue-700">Sign in</span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
}

export default Signup;
