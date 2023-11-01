const express = require('express')
const router = express.Router()
const {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
} = require('../Controller/ProductController')

router.post('/', createProduct),
router.get('/', getProducts),
router.get('/:id', getProduct),
router.delete('/:id', deleteProduct),
router.update('/:id', updateProduct),


module.exports = router;