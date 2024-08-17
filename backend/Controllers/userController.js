import asyncHandler from "express-async-handler";
import User from "../Model/userModel.js";
import generateToken from "../Utils/generateToken.js";
import Cart from "../Model/cartModel.js";
import Product from "../Model/productModel.js";

//register new user
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, age, photo, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    age,
    photo,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      photo: user.photo,
    });
  } else {
    throw new Error("Invalid user Data");
  }
});

//auth  user
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      photo: user.photo,
    });
  } else {
    res.status(401).json({ message: "Invalid Email or password" });
  }
});

//logout  user
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("JWT", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "User logged out" });
});

const updateUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, age, photo } = req.body;
  try {
    const user = await User.findById(req.user._id).select("+password");

    if (user) {
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.email = email || user.email;
      user.password = password || user.password;
      user.age = age || user.age;
      user.photo = photo || user.photo;

      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const getallUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find().populate("wishlist");
    res.status(200).json(users);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).populate("wishlist");
    res.status(200).json(user);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

export {
  registerUser,
  authUser,
  logoutUser,
  updateUser,
  getallUsers,
  getUser,
  deleteUser,
};
