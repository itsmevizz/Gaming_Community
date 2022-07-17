const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController')
const adminController = require('../Controller/adminController')
const verifyJwt = require('../jwt/jwtVerification')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const test = (req, res) => {
    // res.json("Success")
    console.log("Success token");
}
router.get('/userData', verifyJwt, userController.getUserData)
router.patch('/blockUser', verifyJwt, userController.blockUser)
router.patch('/unBlockUser', verifyJwt, userController.unBlockUser)
router.post('/addUser', verifyJwt, userController.addUser)
router.post('/addUser', verifyJwt, userController.registerUser)
router.post('/admin_login', adminController.login)
router.post('/admin_logout', adminController.logout)
module.exports = router;
