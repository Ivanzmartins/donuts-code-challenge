const { User } = require('../models');

const { createToken } = require('../auth/jwtFunctions');

const login = async (cpf, password) => {
  try {
    const user = await User.findOne({ where: { cpf } });

    if (!user || user.password !== password) return { status: 400, message: 'Invalid fields' };

    const { password: _password, ...userWithoutPassword } = user.dataValues;

    const token = createToken(userWithoutPassword);

    return { status: 200, token, userId: user.user_id };

  } catch (error) {
    return { status: 500, message: error.message };
  }
};

module.exports = {
  login,
};