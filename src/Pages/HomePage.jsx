
import React from "react";
import SliderPage from "../Component/SliderPage";
import Cards from "../Component/Cards";
import Blogs from "../Component/Blogs";
import Footer from "../Component/Footer";


const HomePage = () => {
  return (
    <>
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
     <SliderPage/>
        
      </div>
      <div>
        <Cards/>
      </div>
      <div>
        <Blogs />
      </div>
      <div style={{
        margin:"auto",
       
        backgroundColor:"#1976D2",
        color:'white'
      }}>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
