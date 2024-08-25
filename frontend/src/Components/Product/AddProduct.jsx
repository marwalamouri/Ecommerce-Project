import React, { useState } from "react";
import { createProduct } from "../../Redux/productSlice";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    countInStock: "",
    price: "",
    description: "",
  });
  const formHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const addProductHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(product));
    setShowModal(false);
    navigate("/products");
  };
  return (
    <>
      <div class="p-10 bg-gray-100">
        <button
          className="px-6 py-2 uppercase rounded-full 
          bg-blue-200
          hover:bg-blue-800 hover:text-white border-2 border-blue-900 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add New Product
        </button>
      </div>
      {showModal ? (
        <>
          <div className="m-3 pt-10 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add product</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div class="flex items-center justify-center p-12">
                  <div class="mx-auto w-full max-w-[550px]">
                    <form
                      action="https://formbold.com/s/FORM_ID"
                      onSubmit={addProductHandler}
                    >
                      <div class="mb-5">
                        <label
                          for="name"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Name
                        </label>
                        <input
                          onChange={formHandler}
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                          class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div class="mb-5">
                        <label
                          for="stock"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Photo
                        </label>
                        <input
                          type="image"
                          name="photo"
                          id="photo"
                          placeholder="Photo"
                          class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-5">
                            <label
                              for="brand"
                              class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Brand
                            </label>
                            <input
                              onChange={formHandler}
                              type="text"
                              name="brand"
                              placeholder="Brand"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-5">
                            <label
                              for="category"
                              class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Category
                            </label>
                            <input
                              onChange={formHandler}
                              type="text"
                              name="category"
                              id="category"
                              placeholder="Category"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mb-5">
                        <label
                          for="stock"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Quantity in stock
                        </label>
                        <input
                          onChange={formHandler}
                          type="number"
                          name="countInStock"
                          id="stock"
                          placeholder="10"
                          min="0"
                          class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>

                      <div class="mb-5">
                        <label
                          for="price"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Price
                        </label>
                        <input
                          onChange={formHandler}
                          type="number"
                          name="price"
                          id="price"
                          placeholder="999"
                          min="0"
                          class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>

                      <div class="mb-5">
                        <label
                          for="description"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Description
                        </label>
                        <input
                          onChange={formHandler}
                          type="textarea"
                          name="description"
                          id="description"
                          placeholder="Decription"
                          rows="33"
                          class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={addProductHandler}
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddProduct;
