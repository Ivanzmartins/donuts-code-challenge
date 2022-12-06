const express = require('express');

const signUpRouter = express.Router();

const { validateSignUp } = require('../middlewares/signUpValidator');

const { signUp } = require('../controllers/signUpController');

signUpRouter.post('/', validateSignUp,signUp);

module.exports = signUpRouter;