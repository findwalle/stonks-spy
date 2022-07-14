const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('../db/userModel');

const userController = {};

// sign up
userController.createUser = async (req, res, next) => {
  try {
    const {username, password} = req.body;

    if (!username || !passowrd) return next('username or password is missing')

    const queryResult = await User.create({ username, password });

    res.locals.user = queryResult;

    return next();
  } catch (err) {
    return next({
      log: `error caught in userController.createUser: ${err}`,
      message: {err: 'an error occurred when attempting to create a user'}
    })
  }
};

// login
userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) return next('username or password is missing')

    const queryResult = await User.findOne({ username });

    const comparePass = await bcrypt.compare(pass, queryResult.password);

    if (!queryResult || !comparePass) {
      console.log('invalid username or password');
      res.redirect('/signup')
    } else {
      res.locals.user = queryResult;
      return next();
    } 

  } catch (err) {
    return next({
      log: `error caught in userController.verifyUser : ${err}`,
      message: {err: 'an error occurred while attempting to verify a user'}
    })
  }
};