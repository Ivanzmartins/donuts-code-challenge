const { User } = require('../models');

const createUser = async (name, cpf, password, deposit) => {
  try {
    const userExists = await User.findOne({ where: { cpf } });
    if (userExists) return { status: 409, message: 'User already registered' };
    const user = await User.create({ name, cpf, password, balance: deposit });
    return { user: user.name, status: 201 };
  } catch (error) {
    return { status: 500, message: error.message };
  }
}

module.exports = {
  createUser,
};