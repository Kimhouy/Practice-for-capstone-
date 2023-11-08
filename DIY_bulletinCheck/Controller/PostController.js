const Post = require('../Models/PostModel');
const mongoose = require('mongoose')

//create data
const createPosts = async (req, res) => {
    try {
        const post =  await Post.create(req.body)
        console.log(post);
        
    res.status(201).json(post);
    } catch (error) {
        res.status(404).json(error)
        console.log(error);
    }
}

// get data
const getPosts = async (req, res) => {
    try {
        const post = await Post.find()
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({
            message : error
        })
    }
}

// get data by id
const getPost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No posttt requested." })
    }

    const post = await Post.findById(id)

    if (!post) {
        return res.status(404).json({ error: "No such post requested." })
    }

    res.status(200).json(post)
}

//delete data
const deletePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No no no post requested." })
    }

    const post = await Post.findById(id)

    if (!post) {
        return res.status(404).json({ error: "No (odd) post requested." })
    }

    res.status(200).json(post)
}

//update data
const updatePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No (plus even) post requested." })
    }

    const post = await Post.findById(id)

    if (!post) {
        return res.status(404).json({ error: "No (plus double even) post requested." })
    }

    res.status(200).json(post)
}





module.exports = {
    createPosts,
    getPosts,
    getPost,
    deletePost,
    updatePost
}
