const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const productroute = require('./Route/ProductRout')

const app = express()

// middlewear

app .use(express.json()) // covert data to json

// app.get('/', (req, res) => {
//     res.status(200).json({Intro:"This is my router."})
// }) //create route

app.use('/', productroute)

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>{
    console.log("Database is connected.")
    app.listen(process.env.PORT, () => {
        console.log(" Hiii let's get started !!!")
    })  
})
.catch((err)=> {
console.log(err)
})



