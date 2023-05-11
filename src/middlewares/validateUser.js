const schema = require('./schemaUser');
const { User } = require('../models');

const validateUser = async (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const [{ message }] = error.details;
    return res.status(400).json({ message });
  }
  const user = await User.findOne({ where: { email: req.body.email } });

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return next();
};

module.exports = { validateUser };