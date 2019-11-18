const userHandler = require('../handler/userHandler');
const express = require('express');
const router = express.Router();


router
.route('/user/:id?')
.post(userHandler.postUser)
.get(userHandler.getUser);

module.exports = router;
