const { validateToken, returnTokenOwner } = require('../auth/jwtFunctions');

const tokenExistAndValid = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  const payload = validateToken(token);
  if (payload.isError) return res.status(401).json({ message: 'Expired or invalid token' });

  return next();
};

const verifyTokenUser = (req, res, next) => {
  const token = req.headers.authorization;
  const id  = Number(req.params.id);
  const ownerTokenId = returnTokenOwner(token);
  console.log(id, ownerTokenId);
  id === ownerTokenId ? next() : res.status(401).json({ message: 'Unauthorized' });
}

module.exports = {
  tokenExistAndValid,
  verifyTokenUser
};