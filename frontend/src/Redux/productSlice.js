import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const getAllProducts = createAsyncThunk("product/getAll", async () => {
  try {
    axios.defaults.withCredentials = true;
    const { data } = await axios.get(
      "https://ecommerce-project-backend-w8gg.onrender.com/api/products"
    );
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});
export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  try {
    axios.defaults.withCredentials = true;
    const { data } = await axios.get(
      `https://ecommerce-project-backend-w8gg.onrender.com/api/products/${id}`
    );
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const createProduct = createAsyncThunk(
  "product/create",
  async (product) => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        "https://ecommerce-project-backend-w8gg.onrender.com/api/products",
        product
      );
      toast.success("Product created Successfully");
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/update",
  async ({ id, newProduct }) => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.put(
        `https://ecommerce-project-backend-w8gg.onrender.com/api/products/${id}`,
        newProduct
      );
      toast.success("Product updated Successfully");
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);
export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
  try {
    axios.defaults.withCredentials = true;
    const { data } = await axios.delete(
      `https://ecommerce-project-backend-w8gg.onrender.com/api/products/${id}`
    );
    toast.success("Product updated Successfully");
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////////////////////////
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////////////////////////
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.createdProduct = action.payload;
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////////////////////////
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.updatedProduct = action.payload;
    });
    builder.addCase(updateProduct.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////////////////////////
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.deletedProduct = action.payload;
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
