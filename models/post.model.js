const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postText: {
      type: String,
      required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Author' 
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
