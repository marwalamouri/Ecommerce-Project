import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
const store = configureStore({
  reducer: { user: userReducer, auth: authReducer, product: productReducer },
  devTools: true,
});

export default store;
