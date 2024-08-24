import React, { useState } from "react";
import { updateProduct } from "../../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
const UpdateProduct = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);
  const specificProduct = allProducts.filter((el) => el._id == id);
  const [updatedProduct, setUpdatedProduct] = useState({
    id: id,
    name: specificProduct[0].name,
    brand: specificProduct[0].brand,
    category: specificProduct[0].category,
    countInStock: specificProduct[0].countInStock,
    price: specificProduct[0].price,
    description: specificProduct[0].description,
  });
  const formHandler = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };
  const updateProductHandler = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: id, newProduct: updatedProduct }));
    setShowModal(false);
  };
  return (
    <>
      <button
        className="px-6 py-2 uppercase rounded-full  hover:bg-green-800 hover:text-white border-2 border-green-900 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update
      </button>
      {showModal ? (
        <>
          <div className="m-3 pt-10 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
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
                <div className="relative p-6 flex-auto">
                  <form
                    action="https://formbold.com/s/FORM_ID"
                    // onSubmit={updateProductHandler}
                  >
                    <div class="mb-5">
                      <label
                        htmlFor="name"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Name
                      </label>
                      <input
                        defaultValue={specificProduct[0].name}
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
                        htmlFor="stock"
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
                            htmlFor="brand"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Brand
                          </label>
                          <input
                            defaultValue={specificProduct[0].brand}
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
                            htmlFor="category"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Category
                          </label>
                          <input
                            defaultValue={specificProduct[0].category}
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
                        htmlFor="stock"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Quantity in stock
                      </label>
                      <input
                        defaultValue={specificProduct[0].countInStock}
                        onChange={formHandler}
                        type="number"
                        name="countInStock"
                        id="stock"
                        min="0"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div class="mb-5">
                      <label
                        htmlFor="price"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Price
                      </label>
                      <input
                        defaultValue={specificProduct[0].price}
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
                        htmlFor="description"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Description
                      </label>
                      <input
                        defaultValue={specificProduct[0].description}
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
                    onClick={updateProductHandler}
                  >
                    Save Changes
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

export default UpdateProduct;
