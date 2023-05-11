const express = require('express');
const login = require('./controllers/loginController');
const user = require('./controllers/userController');
const { validateLogin } = require('./middlewares/validateLogin');
const { validateUser } = require('./middlewares/validateUser');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.post('/login', validateLogin, login.login);
app.post('/user', validateUser, user.createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
