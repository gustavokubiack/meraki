const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
});

module.exports = mongoose.model("Post", postSchema);
