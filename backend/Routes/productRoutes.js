import express from "express";
import {
  addToWishlist,
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../Controllers/productController.js";
import {
  createReview,
  deleteReview,
  getReviews,
  updateReview,
} from "../Controllers/reviewController.js";
import { protect } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
// Add to wishlist
router.post("/wishlist", protect, addToWishlist);
// Review routes
router.post("/:id/reviews", protect, createReview);
router.get("/:id/reviews", getReviews);
router.put("/reviews/:id", protect, updateReview);
router.delete("/reviews/:id", protect, deleteReview);

export default router;
