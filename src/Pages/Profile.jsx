// Profile.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileuser } from "../Store/Slices/profileSlice";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.profile);

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (token) {
      dispatch(profileuser(token));
    }
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-5">
      {user && user.data && (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://cdn.dotpe.in/longtail/store-logo/3681248/937gDUsv.jpeg"
            alt="Card Image"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-center text-teal-700">
              Welcome {user.data.name}
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {user.data.email}
            </h3>
            <p className="text-gray-600 py-6 text-center">
              Welcome to Our Shopping Zone! Step into a world of endless
              possibilities at our Shopping Zone. Immerse yourself in a seamless
              shopping experience where style meets convenience. Discover a
              curated selection of the latest trends, quality products, and
              exclusive deals that cater to your every need.
            </p>
            
            <div className="text-center">
            <Link to={'/UpadteProfile'} >
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Update Profile ....
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
