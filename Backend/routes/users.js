const express = require('express');
const router = express.Router();
const { Server } = require('socket.io');
const userController = require('../Controller/userController');
const verifyJwt = require('../jwt/jwtVerification')

router.post('/signup', userController.registerUser)
router.post('/login', userController.authUser)
router.post('/validateToken',verifyJwt,userController.userInfo)
router.get('/all/users', userController.getUserData)
router.get("/all/community", userController.allCommunities )
router.post('/new/community', userController.createCommunity)
router.post("/new/message", userController.storeMessage)
router.get("/get/singleCommunity", userController.communityMessages)

module.exports = router;
