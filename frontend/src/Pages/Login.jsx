import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../Redux/userSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { loggedInUser } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signinHandler = (e) => {
    e.preventDefault();
    dispatch(signin(user));
  };
  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser]);
  return (
    <>
      <div class="bg-gray-100 flex items-center justify-center h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div class="flex justify-center mb-6">
            <span class="inline-block bg-gray-200 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                />
              </svg>
            </span>
          </div>
          <h2 class="text-2xl font-semibold text-center mb-4">Log in</h2>
          <p class="text-gray-600 text-center mb-6">
            Enter your details to signin.
          </p>
          <form onSubmit={signinHandler}>
            <div class="mb-4">
              <label
                for="email"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email Address *
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password *
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
