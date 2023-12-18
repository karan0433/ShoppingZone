import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Privateroutes = () => {
//// here we get token that comes  from login.jsx
//// make a condition if token is true than show outlet 
/// means nested component or routes otherwise navigate
/// to login
let token = localStorage.getItem('Token');
console.log(token,"token")

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default Privateroutes;
