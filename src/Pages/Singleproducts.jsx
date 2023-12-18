import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { add } from "../Store/Slices/cartslice";
import { Link } from "react-router-dom";

import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

const Singleproducts = () => {
  // const cartItems = useSelector((state) => state.cart.add);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [singleproducts, setsingleProducts] = useState({});
  const [isbuttonclicked, setIsbuttonclicked] = useState(false);
  const GetSingleproduct = async (e) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const data = response.data;
      setsingleProducts(data);
    } catch (error) {
      console.log("Data Fetching error", error);
    }
  };

  useEffect(() => {
    GetSingleproduct();
  }, []);

  const handleAdd = () => {
    dispatch(add(singleproducts));
    let products = localStorage.getItem("cart");
    

    if (products !== undefined && products !== null) {
      let productsinlocal = JSON.parse(products);
      productsinlocal.push(singleproducts);
      localStorage.setItem("cart", JSON.stringify(productsinlocal));
    } else {
      let products = [];
      products.push(singleproducts);
      localStorage.setItem("cart", JSON.stringify(products));
    }

    setIsbuttonclicked(true);
  };

  return (
    <>
      <div>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-5 my-3">
          <Link to={"/Products"}>Go back</Link>
        </button>
      </div>
      <Card className="w-full max-w-[58rem] md:max-w-[40rem] mx-auto flex-row items-center mt-12 ">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={singleproducts.thumbnail}
            alt={singleproducts.title}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Title : {singleproducts.title}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Brand : {singleproducts.brand}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Price : {singleproducts.price}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Description : {singleproducts.description}
          </Typography>

          <Button
            onClick={() => handleAdd(singleproducts)}
            variant="text"
            className="flex items-center gap-2 bg-blue-500 text-white hover:bg-green-400"
            disabled={isbuttonclicked}
          >
            
            {isbuttonclicked  ? "Product... Added" : "Add to Cart"}
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default Singleproducts;
