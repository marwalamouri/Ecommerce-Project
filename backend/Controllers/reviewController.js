import Review from "../Model/reviewModel.js";
import asyncHandler from "express-async-handler";
import Product from "../Model/productModel.js";

// Create review
const createReview = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { comment, rating } = req.body;
  try {
    const product = await Product.findById(id);
    if (product) {
      const review = await Review.create({
        comment: comment,
        rating: rating,
        user: req.user._id,
      });
      console.log(review);

      product.reviews.push(review._id);
      await product.save();
      res.status(201).json(product);
    } else {
      res.status(400).json("Product do not exist");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});
// Get reviews
const getReviews = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate("reviews");
    if (product) {
      res.status(200).json(product.reviews);
    } else {
      res.status(400).json("Product do not exist");
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
// Update review
const updateReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { comment, rating } = req.body;
  try {
    const review = await Review.findById(id);
    if (review) {
      review.comment = comment || review.comment;
      review.rating = rating || review.rating;
      const upadatedreview = await review.save();

      res.status(201).json(upadatedreview);
    } else {
      res.status(400).json("Review do not exist");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

// Delete review
const deleteReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findByIdAndDelete(id);
    res.status(200).json(review);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

export { createReview, getReviews, updateReview, deleteReview };
