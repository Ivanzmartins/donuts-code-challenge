const { validateToken } = require('../auth/jwtFunctions');

const tokenExistAndValid = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  const payload = validateToken(token);
  if (payload.isError) return res.status(401).json({ message: 'Expired or invalid token' });

  return next();
};

module.exports = { tokenExistAndValid };