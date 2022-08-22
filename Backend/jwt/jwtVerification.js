const asyncHandler = require('express-async-handler')
var jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyJwt = asyncHandler(async(req, res, next) => {
    const authHeader =await req.headers['token']
    console.log(authHeader);
        jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                console.log("Session expired");
                throw new Error("Session expired");
            } else {
                next()
            }

        })
})

module.exports = verifyJwt