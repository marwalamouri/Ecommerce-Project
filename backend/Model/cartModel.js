import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number, default: 1 },
        price: Number,
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // shippingFee: { type: Number, default: 7 },
    // subTotal: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
