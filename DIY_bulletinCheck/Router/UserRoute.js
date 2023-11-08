const express = require('express');
const {
    createUser,
    getUser
} = require('../Controller/user.controller');
const { get } = require('mongoose');

const router = express.Router();

// get user
router.post('/create', createUser);
router.get('/get', getUser );

module.exports = router
