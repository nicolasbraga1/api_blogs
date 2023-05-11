const Joi = require('joi');

const schemaUser = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().required().min(6),
  displayName: Joi.string().required().min(8),
  image: Joi.string(),
});

module.exports = schemaUser;