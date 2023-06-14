const POSTS = require("../model/postModel");

// Creating posts
const create_posts = async (req, res) => {
  const Posts = new POSTS({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPosts = await Posts.save();
    res.status(200).json(savedPosts);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

// Getting all posts
const get_all_posts = async (req, res) => {
  try {
    const getAllPosts = await POSTS.find();
    res.status(200).json(getAllPosts);
    console.log(getAllPosts);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

// Getting specific post
const get_specific_post = async (req, res) => {
  const id = req.params.id;
  try {
    const SpecificPost = await POSTS.findById(id);
    res.status(200).json(SpecificPost);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

// Delete post
const delete_post = async (req, res) => {
  //   const id = ;
  try {
    const deletePost = await POSTS.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(deletePost);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

// Update post
const update_post = async (req, res) => {
  try {
    const updatePost = await POSTS.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = {
  create_posts,
  get_all_posts,
  get_specific_post,
  delete_post,
  update_post,
};
