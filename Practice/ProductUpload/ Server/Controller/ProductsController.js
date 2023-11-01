const Product = require('../Models/ProductModel')
const mongoose = require('mongoose')

// get all products
const getProducts = async (req,res) => {
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)
    console.log(products)
}

module.exports = {
    getProducts
}