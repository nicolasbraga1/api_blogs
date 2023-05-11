const services = require('../services/userService');
const { tokenCreate } = require('../auth/token');

const createUser = async (req, res) => {
  const { email } = req.body;
  await services.createUser(req.body);
  const token = tokenCreate({ data: { email } });
  return res.status(201).json({ token });
};

module.exports = { createUser };