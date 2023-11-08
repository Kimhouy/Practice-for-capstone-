const mongoose = require('mongoose');
// const User = require('./UserModel');

const postSchema = new mongoose.Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // createPost: {
    //     type: Date,
    //     default: Date.now,
    // },
    // createPost: Date,

    title: {
        type: String,
        trim: true
    },
    postContent: {
        type: String,
        trim: true
    },
    // video: {
    //     type: String,
    // },
    // image: {
    //     type: String,
    //     require: true
    //     contentType: 'image/jpeg
    // },
    isLiked: {
        type: Boolean,
        default: false   //true +1
    },
    postComment: {
        ref: 'PostComment',
        type: Array,
        default: []
    },
    postComment: [{type: mongoose.Schema.Types.ObjectId, ref: 'PostComment'},],
    updatePost: {
        type: Date,
        default: Date.now,
    },
    
},{timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
