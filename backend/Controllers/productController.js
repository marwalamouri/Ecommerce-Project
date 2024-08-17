import asyncHandler from "express-async-handler";
import Product from "../Model/productModel.js";
import User from "../Model/userModel.js";

// Create Product
const createProduct = asyncHandler(async (req, res) => {
  const { name, brand, category, description, price, photo, countInStock } =
    req.body;
  try {
    const product = await Product.create({
      name: name,
      brand: brand,
      category: category,
      description: description,
      price: price,
      photo: photo,
      countInStock: countInStock,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

// Get product
const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate("reviews");
    res.status(200).json(product);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

// Get all products
const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

// Update product
const updateProduct = asyncHandler(async (req, res) => {
  const { name, brand, category, description, price, photo, countInStock } =
    req.body;
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (product) {
      product.name = name || product.name;
      product.brand = brand || product.brand;
      product.category = category || product.category;
      product.description = description || product.description;
      product.price = price || product.price;
      product.photo = photo || product.photo;
      product.countInStock = countInStock || product.countInStock;
      const updatedProduct = await product.save();
      res.status(201).json(updatedProduct);
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

// Delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(201).json(product);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

// Add product to wishlist
const addToWishlist = asyncHandler(async (req, res) => {
  const { prodId } = req.body;
  try {
    const user = await User.findById(req.user._id);
    const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
    if (alreadyadded) {
      user.wishlist.pull(prodId);
      await user.save();
    } else {
      user.wishlist.push(prodId);
      await user.save();
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

export {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
};
