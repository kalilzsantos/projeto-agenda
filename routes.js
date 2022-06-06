const express = require('express');
const route = express.Router();
const indexController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const {loginRequired} = require('./src/middlewares/middleware');

// index
route.get('/', indexController.index);

// login
route.get('/login/', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// contato
route.post('/contato/', loginRequired, contatoController.register);
route.post('/contato/edit/:id', loginRequired, contatoController.update);
route.get('/contato/', loginRequired, contatoController.index);
route.get('/contato/:id', loginRequired, contatoController.view);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);

module.exports = route;
