import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../Redux/productSlice";
import UpdateProduct from "./updateProduct";

const Product = ({ el }) => {
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.product);
  return (
    <>
      <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl w-auto h-auto">
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">{el.name}</p>
          <p class="uppercase text-sm font-bold text-gray-600">{el.category}</p>
          <p class="uppercase text-sm text-gray-400">{el.description}</p>
        </div>
        {el.countInStock > 0 ? (
          <div class="w-full flex-none text-sm font-medium text-green-700 mt-2">
            In stock
          </div>
        ) : (
          <div class="w-full flex-none text-sm font-medium text-red-700 mt-2">
            Out of stock
          </div>
        )}
        <div class="prod-img">
          <img src={el.photo} class="w-full object-cover object-center" />
        </div>
        <div class="prod-info grid gap-10">
          <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
            <p class="font-bold text-xl">{el.price} TND</p>
            {el.countInStock > 0 ? (
              <button class="px-6 py-2 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                Add to cart
              </button>
            ) : (
              <button
                disabled
                class=" px-6 py-2 uppercase rounded-full   border-2 border-gray-900 focus:outline-none"
              >
                Add to cart
              </button>
            )}
          </div>
          {/* <button class=" px-6 py-2 uppercase rounded-full  hover:bg-green-800 hover:text-white border-2 border-green-900 focus:outline-none">
            update
          </button> */}
          <UpdateProduct id={el._id} />
          <button
            class=" px-6 py-2 uppercase rounded-full hover:bg-red-800 hover:text-white  border-2 border-red-900 focus:outline-none"
            onClick={() => dispatch(deleteProduct(el._id))}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
