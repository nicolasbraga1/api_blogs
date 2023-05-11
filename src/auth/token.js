const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const tokenCreate = (data) => jwt.sign({ data }, secret, jwtConfig);

const tokenVerify = (token) => jwt.verify(token, secret);

module.exports = { tokenCreate, tokenVerify };