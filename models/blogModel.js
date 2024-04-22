
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique:true
    },
    author: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 1.0,
    },
    dateCreated: {
      type: Date,
      default: new Date(),
    },
  });
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog