import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchproduct,
  selectProducts,
  selectLoading,
  selectError,
} from "../Store/Slices/productslice";

import Card from "@mui/material/Card";
import { Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

const Products = () => {
  // const [currentPage, setcurrentPage] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);


///// pagination =>
  // const ProductPerPage = 10;

  // const indexofLastProduct = currentPage * ProductPerPage;
  // const indexofFirstProduct = indexofLastProduct - ProductPerPage;
  // const currentProduct = products.slice(
  //   indexofFirstProduct,
  //   indexofLastProduct
  // );

  useEffect(() => {
    dispatch(fetchproduct());
  }, []);

  if (loading) {
    return <h3>Loading Please Wait .........</h3>;
  }

  if (error) {
    return <h3>Error Occurred {error}</h3>;
  }
/// pagination function 
  // const handlePageChange = (event, value) => {
  //   setcurrentPage(value);
  // };
  console.log("products", products)

  return (
    <>
      <h3 className="text-green-700 text-center font-bold text-4xl mt-2 hover:cursor-pointer animate-pulse">
        Products Section
      </h3>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3 px-2">
      {products.products && products.products.length  > 0 ? (
         products.products.map((item, i) => (
            <Link to={`/Products/${item.id}`} key={i}>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: "auto",
                  textAlign: "center",
                  marginTop: "5rem",
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={item.images[0]}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Product No. : {item.id}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Brand : {item.brand}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Category : {item.category}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      {/* <div className="flex justify-center items-center mt-5 py-5">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(products.products.length / ProductPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </div> */}
    </>
  );
};

export default Products;
