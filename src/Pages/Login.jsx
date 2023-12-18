import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { loginUser, logout } from "../Store/Slices/loginSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Login = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const SigninUser = useSelector((state) => state.login);
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); /// fpr making the login button disable once it is clicked

  const handleLogin = (e) => {
    setuserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitting(true); 

      let LOGIN = await dispatch(loginUser(userdata));
      console.log("Responce: ", LOGIN);

      if (LOGIN?.payload?.success === true) {
        //// local storage. setitem is for protected routes thats we can acces in privateroutes.js
        localStorage.setItem("Token", LOGIN?.payload?.token);
        dispatch(logout(true))
        toast.success(LOGIN?.payload?.msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          naviagte("/profile");
        }, 1000);
      } else {
        toast.error(LOGIN?.payload?.msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsSubmitting(false);
      }

    
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false); // Reset the state in case of an error
    }
  };

  /// loading processing button
  const processingbtn = <Box sx={{ display: 'flex' }}>
  <CircularProgress color="inherit" />
</Box>
  

  return (
    <div className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-gray-300 shadow-lg py-10 px-16">
        <h1 className="text-2xl font-medium text-blue-600 mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              className={`w-full p-2 text-gray-800 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              name="email"
              placeholder="Your Email"
              value={userdata.email}
              onChange={handleLogin}
            />
          </div>
          <div>
            <label className="text-gray-600">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-gray-800 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              name="password"
              placeholder="Your Password"
              value={userdata.password}
              onChange={handleLogin}
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue-600 py-2 px-4 text-sm text-white rounded border border-indigo-700 focus:outline-none focus:border-indigo-800`}
              disabled={isSubmitting} // Disable the button when submitting
            >
              {isSubmitting ?  processingbtn : "Login"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
