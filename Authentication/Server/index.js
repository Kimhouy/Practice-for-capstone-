const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/usermodel')
const app = express();
const jwt = require('jsonwebtoken')

const DB = `mongodb+srv://lyeng:Lyeng12345@kaksikortesting.0wwyi7u.mongodb.net/Login?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json());

mongoose.connect(DB);

app.post('/api/register', async (req, res) => {
    console.log(req.body);
     try{
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })

        if (user) {
            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email
                },
                'secret123'
            )
            res.status(200).json({status: 'Ok', user: token})
        } else {
            res.status(200).json({status: 'Ok', user: false})
        }


        
     }catch(error){
        res.status(404).json(error)
     }
});

app.listen(1337, () => {
    console.log('Server started on 1337');
});
