import React from "react";
import { useState } from "react";

const Login = () => {
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
  });

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const isValidPassword = passwordRegex.test(userdata.password)

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userdata;

    if (email === "" || password === "") {
        alert("Please fill both fields");
    } else if (!isValidPassword) {
        alert("Requires a minimum of 8 characters, with at least one letter and one number");
    }
    else {
        alert("form submit succesfully")
        setuserdata({email:"",password:""})
       
    }
};

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
              placeholder="Your Email"
              value={userdata.email}
              onChange={(e) =>
                setuserdata({ ...userdata, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-gray-600">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-gray-800 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
              value={userdata.password}
              onChange={(e) =>
                setuserdata({ ...userdata, password: e.target.value })
              }
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue-600 py-2 px-4 text-sm text-white rounded border border-indigo-700 focus:outline-none focus:border-indigo-800`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
