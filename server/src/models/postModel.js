// Schemas
const mongoose = require("mongoose");

// schema for a blog post
const postSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Created: { type: Date, required: true },
  PostBody: String
})

const post = mongoose.model("Post", postSchema);

module.exports = {
  post,
}