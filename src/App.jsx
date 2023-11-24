import "./App.css";
import Navbar from "./Component/Navbar";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";
import NoPage from "./Pages/NoPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<Aboutus />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
           <Route path="/Register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
