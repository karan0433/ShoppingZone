import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { remove  } from "../Store/Slices/cartslice"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
 
  




  const handleRemove = (itemId) => {
    // Dispatch the remove action
    dispatch(remove(itemId));
  
    // Remove the item from localStorage
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  
   
    if (updatedCart.length === 0) {
      localStorage.removeItem("cart");
    
    }
  }
  console.log(cartItems, "carttttt")
  

  return (
    <div className="cart-card-div flex flex-wrap justify-center lg:gap-5 md:gap-2 items-center mt-3">
      
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
       Brand : {item.brand}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
        Price:    {item.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
     Description:     {item.description}
          
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-red-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none hover:bg-emerald-900 focus:scale-105 focus:shadow-none active:scale-100 !bg-red-500 !text-white"
          onClick={()=>handleRemove(item.id)}
        >
          Remove Item
        </Button>
      </CardFooter>
    </Card>
        ))
      ) : (
        <Typography variant="h6">Your cart is empty</Typography>
      )}
    </div>
  );
};

export default Cart;
