const express = require('express');

const transactionController = require('../controllers/transactionController');

const { tokenExistAndValid } = require('../middlewares/tokenValidator');

const transactionRouter = express.Router();

transactionRouter.post('/:id', tokenExistAndValid, transactionController.newTransaction);

module.exports = transactionRouter;