import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Loginnav from "./Component/Loginnav";

import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Privateroutes from "./Pages/Privateroutes";
import NoPage from "./Pages/NoPage";
import Singleproducts from "./Pages/Singleproducts";
import Categories from "./Pages/Categories";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "./Store/Slices/loginSlice";
import UpadteProfile from "./Pages/UpadteProfile";
import ForgotPass from "./Pages/ForgotPass";

function App() {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("Token");

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   console.log("I am worlimg!");
  //   if (userToken !== "" && userToken !== null) {
  //     setIsAuthenticated(true);
  //   }
  // }, [userToken]);

  useEffect(() => {
    
    dispatch(logout(userToken ? true : false));
  }, [isAuthenticated]);

  return (
    <>
      <BrowserRouter>
        {isAuthenticated ? <Loginnav /> : <Navbar />}

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<Aboutus />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/category" element={<Categories />} />
          <Route path="*" element={<NoPage />} />
          {/* <Route path="/categories/:category" element={<Categories />} /> */}
          {/* Conditional rendering for protected routes */}
          {/* {isAuthenticated ? ( */}
          <Route element={<Privateroutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Products/:id" element={<Singleproducts />} />
            <Route path="/UpadteProfile" element={<UpadteProfile />} />
          </Route>
          {/* ) : ( */}
          // Redirect to login if not authenticated
          <Route path="/login" element={<Login />} />
          {/* )} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
