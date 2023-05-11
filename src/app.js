const express = require('express');
const login = require('./controllers/loginController');
const { validateLogin } = require('./middlewares/validateLogin');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.post('/login', validateLogin, login.login);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
