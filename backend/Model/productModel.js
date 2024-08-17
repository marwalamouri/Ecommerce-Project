import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    photo: {
      type: String,
      default:
        "https://images.samsung.com/is/image/samsung/p6pim/fr/np960qfg-ka4fr/gallery/fr-galaxy-book-np960qfg-ka4fr-front-graphite-thumb-535449913?$172_172_PNG$",
    },
    countInStock: { type: Number, required: true, default: 0 },
    reviews: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Review", default: 0 },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
