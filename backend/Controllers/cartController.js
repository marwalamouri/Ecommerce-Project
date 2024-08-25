import Cart from "../Model/cartModel.js";
import asyncHandler from "express-async-handler";
import User from "../Model/userModel.js";
import Product from "../Model/productModel.js";

const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;
  try {
    let products = [];
    const user = await User.findById(_id);
    const alreadyExistCart = await Cart.findOne({ user: user._id });
    // if (alreadyExistCart) {
    //   alreadyExistCart.remove();
    // }
    console.log(alreadyExistCart);

    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.quantity = cart[i].quantity;
      let getPrice = await Product.findById(cart[i]._id).select("price").exec();
      object.price = getPrice.price;
      products.push(object);
    }
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total = total + products[i].price * products[i].quantity;
    }
    let newCart = await new Cart({
      products,
      total,
      user: user._id,
    }).save();
    res.json(newCart);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const getUserCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    const cart = await Cart.findOne({ user: user._id });

    res.status(200).json(cart);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    const cart = await Cart.findOneAndDelete({ user: user._id });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

export { userCart, getUserCart, emptyCart };
