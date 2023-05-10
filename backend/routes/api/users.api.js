const express = require("express");
const routes = express.Router();

const {userList, addUser} = require('../../features/userController')
const {validationAddUser} = require('../../features/userValidation')

routes.get('/', userList )
routes.post('/add', validationAddUser, addUser)

module.exports = routes;