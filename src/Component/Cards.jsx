import React from "react";

const Cards = () => {
  return (
    <>
      <div>
        <h2 className="mt-10 mb-2 text-center capitalize text-4xl text-red-400 font-mono">
          Deals In Best Products
        </h2>
        <hr className="w w-1/5 mx-auto" />
      </div>
      {/* ////cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 sm:gap-3 justify-items-center mt-20">
        {/* first cards */}
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://images.unsplash.com/photo-1541840031508-326b77c9a17e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="products"
              className="cards-image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Garments</div>
              <p className="text-grey-400 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nobis, ex cumque assumenda id aliquid possimus itaque
                dolorum reiciendis maxime minus,
              </p>
            </div>
          </div>
        </div>
        {/* second cards */}
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://images.unsplash.com/photo-1499971442178-8c10fdf5f6ac?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="products"
              className="cards-image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Garments</div>
              <p className="text-grey-400 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nobis, ex cumque assumenda id aliquid possimus itaque
                dolorum reiciendis maxime minus,
              </p>
            </div>
          </div>
        </div>
        {/* third card */}
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://images.unsplash.com/photo-1541840031508-326b77c9a17e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="products"
              className="cards-image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Garments</div>
              <p className="text-grey-400 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nobis, ex cumque assumenda id aliquid possimus itaque
                dolorum reiciendis maxime minus,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
