const express = require("express");
const router = express.Router();
const {
  create_posts,
  get_all_posts,
  get_specific_post,
  delete_post,
  update_post,
} = require("../controller/postsController");

// Create posts route
router.post("/create", create_posts);

// Get all posts route
router.get("/allPosts", get_all_posts);

// Get specific post route
router.get("/specific/:id", get_specific_post);

// Delete post route
router.delete("/delete/:id", delete_post);

// Delete post route
router.patch("/update/:id", update_post);

module.exports = router;
