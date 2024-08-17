import express from "express";
import {
  userCart,
  getUserCart,
  emptyCart,
} from "../Controllers/cartController.js";
import { protect } from "../Middlewares/authMiddleware.js";
const router = express.Router();

// Cart
router.post("/", protect, userCart);
router.get("/", protect, getUserCart);
router.delete("/", protect, emptyCart);
export default router;
