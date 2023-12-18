import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <div className="mt-3 font-sans text-lg flex justify-center text-red-600">
        Page Not Available
      </div>
      <div className="flex justify-center mt-2">
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default NoPage;
