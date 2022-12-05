const express = require('express');

const loginRoutes = require('./routes/loginRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

module.exports = app;