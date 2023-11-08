const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const postroute = require('./Router/PostRoute')

const app = express()

// middlewear

app .use(express.json()) // convert data to json

// app.get('/', (req, res) => {
//     res.status(200).json({Intro:"Welcome to my routerX))"})
// }) //create route 

app.use('/api', postroute)


mongoose.connect(process.env.DB, )
.then(() => {
    console.log("Right!!! Database is connected!!!")
    app.listen(process.env.PORT, () => {
        console.log("Why don't we get started now?")
    })
})
.catch((error) => {
    console.log(error)
})