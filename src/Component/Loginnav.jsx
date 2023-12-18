import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/Slices/loginSlice";
import { setCart } from "../Store/Slices/cartslice";


const Loginnav = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isNavOpen, setIsNavOpen] = useState(false);
  

  useEffect(() => {
    let data = localStorage.getItem("cart");
    data = JSON.parse(data);
    
    if (data !== null && data !== undefined) {
      dispatch(setCart(data));
    }
    // const setCartproducts = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

    // dispatch(setCart(setCartproducts));
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handlelogout = () => {
    ///// function make in login slice
    dispatch(logout(false));

  
    //// reomve user token from local storage so that he can't acces private routes
    //// after logout
    localStorage.removeItem("Token");
    localStorage.removeItem("cart");
    // console.log(logout,"log")
    dispatch(setCart([]))

    navigate("/login");
  };

  return (
    <>
      <div className="container-fluid mx-auto py-2 bg-black ">
        <nav className="navbar dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className=" !text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Shopping Zone
              </span>
            </Link>
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${
                isNavOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 !text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-blue md:dark:text-blue-500"
                    aria-current="page"
                  >
                  Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products"
                    className="block py-2 px-3 !text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="block py-2 px-3 !text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="block py-2 px-3 !text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    <span>Cart {cartItems.length}</span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handlelogout}
                    className="block py-2 px-3 !text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Loginnav;
