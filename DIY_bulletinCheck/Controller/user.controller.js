require('dotenv/config');
const mongoose = require('mongoose')
const express = require('express');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const secret = process.env.JWT_SECRET || 'mernBB-default-secret';
// const passport = require('passport');
// const userController = express.Router();
// const UserGroup = require('../models/UserGroup');
const User = require('../Models/User');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  }
  catch (error){
    res.status(404).json({
      message: error
    })
  }
}

const getUser = async (req,res) => {
  try{
      const users = await User.find()

      res.status(200).json(users)

  }catch(error){
    res.status(404).json({
      message: error
    })
  }
}

module.exports = {
  createUser,
  getUser
};
