const mongoose = require('mongoose')

const productmodels = mongoose.Schema({
    name:{
        type:String, 
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    }
    
})

module.exports = mongoose.model("Product", productmodels)
