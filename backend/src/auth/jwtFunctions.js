const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

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

const returnTokenOwner = (token) => {
  const { data } = jwt.verify(token, secret);
  const { user_id } = data;
  return user_id;
};

module.exports = {
  createToken,
  validateToken,
  returnTokenOwner,
};