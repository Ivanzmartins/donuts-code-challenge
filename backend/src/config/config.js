require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'rhmenota',
  database: process.env.MYSQL_DATABASE || 'donutDB',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
  port: process.env.MYSQL_PORT || 3305,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};