import React, { useState } from "react";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { profileuser } from "../Store/Slices/profileSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";

const UpadteProfile = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const [values, setValues] = useState({
    name: user.data.name || "",
    password: user.data.password || "",
    confirm_password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    password: "",
    confirm_password: "",
    name: "",
  });

  const handleChange = (e) => {
    setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
    setValidationErrors({ ...validationErrors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, password, confirm_password } = values;

    // Validation checks
    if (password !== confirm_password) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password and Confirm Password do not match",
      }));
      return;
    }

    // if (!/^[A-Z]/.test(name)) {
    //   setValidationErrors((prevErrors) => ({
    //     ...prevErrors,
    //     name: "First name should start with a capital letter",
    //   }));
    //   return;
    // }

    try {
      const token = localStorage.getItem("Token");
      if (!token) {
        console.error("Token is missing");
        return;
      }

      const response = await fetch(
        "https://backend-social-media-ni8l.onrender.com/api/v1/auth/profile",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: values.name,
            password: values.password,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
    
        console.log("message", responseData.msg)
        dispatch(profileuser(token));
        toast.success(responseData.msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true, 
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        
        console.log("Profile updated successfully");
        setTimeout(() => {
          naviagte("/profile")
        }, 2000);
      } else {
        const errorData = await response.json();
        toast.error(errorData.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error("Error updating profile:", errorData.error);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md p-8 bg-indigo-100 rounded-md">
          <div className="text-center text-indigo-600 font-bold text-2xl mb-4">
            Edit Profile
          </div>
          <div className="text-center mb-4 text-indigo-600 text-lg">
            Welcome {user.data.name} <br />
            Here you can edit your profile. <br /> Your email is -{" "}
            {user.data.email} <hr />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label>Full name</label>
              <input
                type="text"
                name="name"
                className="w-full h-10 mt-1 p-2 border rounded-md"
                value={values.name}
                onChange={handleChange}
              />
              {validationErrors.name && (
                <div className="text-red-500">{validationErrors.name}</div>
              )}
            </div>

            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="w-full h-10 mt-1 p-2 border rounded-md"
                value={values.password}
                onChange={handleChange}
              />
              {validationErrors.password && (
                <div className="text-red-500">{validationErrors.password}</div>
              )}
            </div>

            <div className="mb-4">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                className="w-full h-10 mt-1 p-2 border rounded-md"
                value={values.confirm_password}
                onChange={handleChange}
              />
              {validationErrors.confirm_password && (
                <div className="text-red-500">{validationErrors.confirm_password}</div>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default UpadteProfile;
