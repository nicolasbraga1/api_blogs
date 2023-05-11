const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const create = User.create({ displayName, email, password, image });
  return create;
};

const findAll = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return { type: null, status: 200, message: users };
};

module.exports = { createUser, findAll };