const userServices = require('../services/userServices');

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userServices.getById(id);
    const { password: _password, ...userWithoutPassword } = user.dataValues;
    return res.status(200).json(userWithoutPassword);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getById,
};