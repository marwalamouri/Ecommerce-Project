import React, { useState } from "react";
import { updateProduct } from "../../Redux/productSlice";
import { useDispatch } from "react-redux";
const UpdateProduct = () => {
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
  const updateProductHandler = (e) => {
    e.preventDefault();
    dispatch(updateProduct(product));
  };
  return (
    <>
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form
            action="https://formbold.com/s/FORM_ID"
            onSubmit={updateProductHandler}
          >
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
              </label>
              <input
                defaultValue={product.name}
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
                    defaultValue={product.brand}
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
                    defaultValue={product.category}
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
                defaultValue={product.quantityInStock}
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
                defaultValue={product.price}
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
                defaultValue={product.description}
                onChange={formHandler}
                type="textarea"
                name="description"
                id="description"
                placeholder="Decription"
                rows="33"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                type="submit"
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
