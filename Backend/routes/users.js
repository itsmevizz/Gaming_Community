const express = require('express');
const router = express.Router();
const { Server } = require('socket.io');
const userController = require('../Controller/userController');
const verifyJwt = require('../jwt/jwtVerification')

router.post('/signup', userController.registerUser)
router.post('/login', userController.authUser)
router.post('/validateToken',verifyJwt,userController.userInfo), 

module.exports = router;
