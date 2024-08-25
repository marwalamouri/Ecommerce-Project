import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import store from "./Redux/store.js";
import Products from "./Pages/Products.jsx";
import UsersList from "./Pages/Admin/UsersList.jsx";
import UserProfile from "./Components/User/UserProfile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/products" element={<Products />}>
        {/* <Route path="addproduct" element={<AddProduct />} />
        <Route path="updateproduct" element={<UpdateProduct />} /> */}
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
