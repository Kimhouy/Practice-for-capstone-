const Product = require('../Models/productmodels')
const mongoose = require('mongoose')

// create data
const createProduct = async ( req, res) => {
try{
    const product = await Product.create(req.body)
} catch(error) {
    res.status(404).json(error)
}
}

module.exports = {
    createProduct
}