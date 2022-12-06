const createUser = require('../services/signUpService');

const signUp = async (req, res) => {
  try{
  const { name, cpf, password, deposit } = req.body;
  const { user, status, message } = await createUser.createUser(name, cpf, password, deposit);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({user});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  signUp,
};