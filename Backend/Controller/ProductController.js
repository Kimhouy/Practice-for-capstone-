// const Product = require('../Models/productmodels')
const Product = require('../Models/productmodels');

const mongoose = require('mongoose')

// create data
const createProduct = async ( req, res) => {
try{
    const product = await Product.create(req.body)
    res.status(201).json(product);
} catch(error) {
    res.status(404).json(error)
}
}

module.exports = {
    createProduct
}