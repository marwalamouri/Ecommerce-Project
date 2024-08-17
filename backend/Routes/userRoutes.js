import express from "express";
import {
  authUser,
  logoutUser,
  registerUser,
  updateUser,
  deleteUser,
  getUser,
  getallUsers,
} from "../Controllers/userController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/:id", protect, getUser);
router.get("/", protect, getallUsers);
router.put("/", protect, updateUser);
router.delete("/", protect, deleteUser);

export default router;
