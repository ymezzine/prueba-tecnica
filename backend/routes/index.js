const express = require('express');
const router = express.Router();
const apiUsers = require('./api/users.api');

router.use('/users', apiUsers);

module.exports = router;


