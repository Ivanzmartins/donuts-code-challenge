const joi = require('joi');

const loginSchema = joi.object({
  cpf: joi.string().length(11).required(),
  password: joi.string().required(),
});

const validateLogin = async (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = { validateLogin };
