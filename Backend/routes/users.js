const express = require("express");
const { Server } = require("socket.io");
const router = express.Router();
const server = require("../bin/server");
const userController = require("../Controller/userController");
const verifyJwt = require("../jwt/jwtVerification");

router.post("/signup", userController.registerUser);
router.post("/login", userController.authUser);
router.post("/validateToken", verifyJwt, userController.userInfo);
router.get("/all/users", userController.getUserData);
router.get("/all/community", userController.allCommunities);
router.post("/new/community", verifyJwt, userController.createCommunity);
router.post("/new/message", verifyJwt, userController.storeMessage);
router.get("/get/singleCommunityMessage", userController.communityMessages);
router.patch("/join/community", verifyJwt, userController.joinCommunity);
router.patch("/follow/user", verifyJwt, userController.followUser);
router.patch("/un/follow", verifyJwt, userController.unFollow);
router.get('/my/friends',verifyJwt, userController.friends )
router.post('/personal/chat',verifyJwt, userController.personalChat)
router.get('/get/personal/chat',verifyJwt, userController.getPersolanChat)

module.exports = router;
