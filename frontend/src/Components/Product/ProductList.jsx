import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/productSlice";
import Product from "../../Components/Product/Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <div class="py-10 bg-gray-100">
        <h1 class="text-center text-2xl font-bold text-gray-800">
          All Products
        </h1>

        <div class="mx-auto grid max-w-full grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allProducts?.map((el) => (
            <Product el={el} key={el._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
