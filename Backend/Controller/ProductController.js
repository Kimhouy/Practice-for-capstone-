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

const getProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : "No product requested."})
    }

    const product = await Product.findById(id)

    if (!product) {
        return res.status(404).json({error: "No such product reequested."})
    }

    res.status(200).json(product)
}















module.exports = {
    createProduct,
    getProduct,
}                   