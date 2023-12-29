// import React from 'react'
import { FaSearch, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-slate-500">Dream </span>
            <span className="text-green-700">Adobe</span>
          </h1>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-2 rounded-full flex items-center shadow-md"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-40 sm:w-64 px-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch size="24" className="text-slate-600 " />
          </button>
        </form>

        <div className="flex gap-4 items-center">
          <div className="hidden sm:flex items-center gap-4">
            <Link to="/">
              <li className="hidden text-sm sm:text-lg sm:inline text-slate-700 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-sm sm:text-lg text-slate-700 hover:underline">
                About
              </li>
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              className="text-slate-700 hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
          <div className="hidden sm:flex ">
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <li className="text-slate-700  text-sm sm:text-lg hover:underline list-none">
                  {" "}
                  Sign in
                </li>
              )}
            </Link>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 z-20 right-4 bg-white shadow-md p-4 rounded-md">
          <ul className="flex flex-col gap-2">
            <Link to="/">
              <li
                className="text-slate-700  text-sm sm:text-lg hover:underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                className="text-slate-700 text-sm sm:text-lg hover:underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </li>
            </Link>
            <Link to="/profile">
              <li
                className="text-slate-700 text-sm sm:text-lg hover:underline "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {currentUser ? "Profile" : "Sign In"}
              </li>
            </Link>
            {/* Include additional links as needed */}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
