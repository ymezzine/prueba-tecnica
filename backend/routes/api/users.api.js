const express = require('express');
const router = express.Router();
const usersController = require('../../controller/usersController');


router.get('/', usersController.getUsers);
router.post('/', usersController.create);
router.get('/:id', usersController.getById);

module.exports = router;


