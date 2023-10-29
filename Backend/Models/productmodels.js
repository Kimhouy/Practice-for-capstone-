const mongoose = require('mongoose')

const productmodels = mongoose.Schema({
    name:{
        type:String, 
        require: true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require: true
    },
    quantity:{
        type:Number,
        require: true
    }
    
})

module.exports = mongoose.model("Product", productmodels)
