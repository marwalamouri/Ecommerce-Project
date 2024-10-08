import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../Model/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.JWT;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized,Invalid Token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const authorizeAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      message: "Admin authorization required",
    });
  }
});

export { protect };
