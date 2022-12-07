const { User } = require('../models');

const getById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    return { status: 500, message: error.message };
  }
}

module.exports = {
  getById,
};