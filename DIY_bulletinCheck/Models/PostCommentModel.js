const mongoose = require('mongoose');
// const Post = require('./PostModel');

const postCommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  Comment: {
    type: String,
    trim: true,
  },
  createComment: {
    type: Date,
    required: Date.now,
  },
});

const PostComment = mongoose.model('PostComment', postCommentSchema);

module.exports = PostComment;