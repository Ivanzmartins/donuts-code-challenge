const { tokenExistAndValid } = require('../middlewares/tokenValidator');

const express = require('express');

const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/:id', tokenExistAndValid, userController.getById);

module.exports = userRouter;

