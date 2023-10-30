const express = require('express')
const router = express.Router()
const {
    createProduct 
} = require('../Controller/ProductController')

router.post('/', createProduct)

module.exports = router;