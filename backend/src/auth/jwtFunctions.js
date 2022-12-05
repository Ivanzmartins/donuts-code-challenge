const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (userWithoutPassword) => {
  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);
  return token;
};

const validateToken = (authorization) => {
  try {
  const payload = jwt.verify(authorization, secret);
  return payload;
  } catch (error) {
    return { isError: error };
  }
};

module.exports = {
  createToken,
  validateToken,
};