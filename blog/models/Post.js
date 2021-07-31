const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Add a post title"]
  },
  body: {
    type: String,
    required: true,
    maxLength: [250, "Post cannot exceed 250 characters"]
  },
  date: {
    type: String
  }
})

const post = mongoose.model("Post", PostSchema);

module.exports = { post }