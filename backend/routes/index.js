const express = require('express');
const routes = express.Router();
const userApiRoutes = require('./api/users.api')

routes.use('/user', userApiRoutes)

module.exports = routes