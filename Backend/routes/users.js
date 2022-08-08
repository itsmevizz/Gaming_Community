const express = require('express');
const { Server } = require('socket.io');
const router = express.Router();
const server = require('../bin/server');
const userController = require('../Controller/userController');
const verifyJwt = require('../jwt/jwtVerification') 

router.post('/signup', userController.registerUser)
router.post('/login', userController.authUser)
router.post('/validateToken',verifyJwt,userController.userInfo)
router.get('/all/users', userController.getUserData)
router.get("/all/community", userController.allCommunities )
router.post('/new/community', userController.createCommunity)
router.post("/new/message", userController.storeMessage)
router.get("/get/singleCommunityMessage", userController.communityMessages)
router.patch('/join/community', userController.joinCommunity)
router.get('/my/communities', userController.getMyCommunities)


// const io = new Server(server, {
//     cors: {
//       origin: "http://localhost:3000",
//       methods: ["GET", "POST"]
//     }
//   })
  
//   io.on("connection",(Socket)=>{
//     console.log('a user connected');
//   } )


module.exports = router;
