const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        quote: {
            type: String
        }
    },
    {collectiong: 'user-data'}
)

const model = mongoose.model("UserData",User)

module.exports = model