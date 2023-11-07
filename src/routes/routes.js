const connection = require('../database/connection');
const express = require('express');
const routes = express.Router();
const TesteController = require('../controllers/TesteController');

routes.post('/teste', TesteController.novoTeste);

module.exports = routes;