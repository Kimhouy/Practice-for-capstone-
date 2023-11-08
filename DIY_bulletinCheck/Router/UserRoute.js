const express = require('express');
const {
    createUser
} = require('../Controller/user.controller');

const router = express.Router();

// get user
router.get('/users', createUser);
