const express = require('express')
const router = express.Router()
const {
    createPosts,
    getPosts,
    getPost,
    deletePost,
    updatePost
} = require('../Controller/PostController')

router.post('/upload', createPosts),
router.get('/posts', getPosts),
router.get('/post:id', getPost),
router.delete('delete:/id', deletePost),
router.patch('/update:id', updatePost),


module.exports = router;