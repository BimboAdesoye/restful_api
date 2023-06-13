const express = require("express");
const router = express.Router();
const {
  create_posts,
  get_all_posts,
} = require("../controller/postsController");

// Create posts route
router.post("/create", create_posts);

// Get all posts route
router.get("/allPosts", get_all_posts);

module.exports = router;
