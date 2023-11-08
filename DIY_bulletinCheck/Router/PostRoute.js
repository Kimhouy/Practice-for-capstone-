const express = require('express')
const router = express.Router()
const {
    createPosts,
    getPosts,
    getPost,
    deletePost,
    updatePost
} = require('../Controller/PostController')

router.post('/', createPosts),
router.get('/posts', getPosts),
router.get('/:id', getPost),
router.delete(':/id', deletePost),
router.patch('/:id', updatePost),


module.exports = router;