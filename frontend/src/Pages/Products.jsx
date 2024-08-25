import React from "react";
import AddProduct from "../Components/Product/AddProduct";

import { Outlet } from "react-router-dom";
import ProductsList from "./Admin/ProductsList";

const Products = () => {
  return (
    <>
      <AddProduct />
      <ProductsList />
      {/* <button>
        <Link to="addproduct">Add Product</Link>
      </button> */}
      {/* <button>
        <Link to="updateProduct">Update Product</Link>
      </button> */}
      <Outlet />
    </>
  );
};

export default Products;
