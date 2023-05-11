const services = require('../services/userService');
const { tokenCreate } = require('../auth/token');

const createUser = async (req, res) => {
  const { email } = req.body;
  await services.createUser(req.body);
  const token = tokenCreate({ data: { email } });
  return res.status(201).json({ token });
};

const findUsers = async (req, res) => {
  const { status, message } = await services.findAll();
  res.status(status).json(message);
};

module.exports = { createUser, findUsers };