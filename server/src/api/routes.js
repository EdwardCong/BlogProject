// API endpoints
const express = require("express");
const { post } = require("../models/postModel");

const router = express.Router();

// Check if route is working
router.get("/health", (req, res) => {
  res.sendStatus(200);
});

// Get all existing posts
router.get("/", async (req, res) => {
  const posts = await post.find();
  res.json(posts);
});

// Find specific post
router.get("/:_id", async (req, res) => {
  const specificPost = await post.findById(req.params);
  res.json(specificPost);
});

// Create posts
router.post("/post", async (req, res) => {
  // get data from request
  const { Title, Created, PostBody } = req.body;
  
  // construct model
  const newPost = new post({
    Title: Title,
    Created: Created,
    PostBody: PostBody,
  });

  // save post to database
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.error(err)
  }
});



module.exports = router;