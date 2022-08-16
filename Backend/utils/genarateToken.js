const jwt = require ('jsonwebtoken')

const generateToken =(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:'50m',
    })
}

module.exports = generateToken