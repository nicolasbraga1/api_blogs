const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const create = User.create({ displayName, email, password, image });
  return create;
};

module.exports = { createUser };