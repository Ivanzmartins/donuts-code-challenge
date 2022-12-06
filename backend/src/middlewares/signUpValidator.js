const joi = require('joi');

const signUpSchema = joi.object({
  name: joi.string().required().min(5),
  cpf: joi.string().required().length(11),
  password: joi.string().required().min(6),
  deposit: joi.number().required().min(0),
});

const validateSignUp = async (req, res, next) => {
  const { error } = signUpSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
}

module.exports = { validateSignUp };