const loginService = require('../services/loginServices');

const login = async (req, res) => {
  const { cpf, password } = req.body;

  try{
    const { status, message, token, userId } = await loginService.login(cpf, password);
  
    if( message ) return res.status(status).json({ message });
  
    return res.status(status).json({ token, userId });

  } catch(error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  login,
};