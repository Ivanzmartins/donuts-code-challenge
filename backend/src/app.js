const express = require('express');

const loginRoutes = require('./routes/loginRouter');

const transactionRoutes = require('./routes/transactionsRouter');

const signUpRoutes = require('./routes/signUpRouter');

const { User } = require('./models');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

app.use('/user', transactionRoutes);

app.use('/signup', signUpRoutes);



app.get('/teste', async(_req, res) => {
  const users = await User.findAll();
  res.status(200).json({ users });
});


module.exports = app;