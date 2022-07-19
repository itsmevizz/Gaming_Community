const express = require('express');
const router = express.Router();
const { Server } = require('socket.io');
const userController = require('../Controller/userController');

router.post('/signup', userController.registerUser)
router.post('/login', userController.authUser)


module.exports = router;
