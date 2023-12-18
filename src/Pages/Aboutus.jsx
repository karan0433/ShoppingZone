// About.js

import React from "react";

const About = () => {
  return (
    <div className=" container-fluid bg-white min-h-screen py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-4 text-black animate-bounce">
          About Shopping Zone
        </h1>

        <h3 className="text-blue-700 mb-6 mt-8 text-3xl animate-pulse">
          Welcome to Shopping Zone, your go-to destination for a seamless online
          shopping experience.
          <br /> At Shopping Zone, we strive to provide a wide range of
          high-quality products at competitive prices.
        </h3>
        <h4 className="text-blue-700 mb-6 animate-fade-in">
          Our mission is to make shopping convenient and enjoyable for our
          customers. Whether you're looking for the latest fashion trends,
          electronics, home decor, or more, we've got you covered.
        </h4>
        <p className="text-blue-700 mb-6 animate-fade-in">
          Shopping Zone is committed to ensuring a secure and user-friendly
          platform. We prioritize customer satisfaction and aim to exceed your
          expectations with every purchase.
        </p>
        <p className="text-red-700 mb-6 animate-fade-in">
          Feel free to explore our extensive catalog and discover the best deals
          tailored just for you. Thank you for choosing Shopping Zone as your
          preferred online shopping destination!
        </p>
      </div>
    </div>
  );
};

export default About;
