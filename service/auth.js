const jwt = require("jsonwebtoken");
require('dotenv').config();
const SECRET = process.env.JWT_SECRET;

function setUser(user){
    return jwt.sign({
        _id: user.id,
        email: user.email,
        role: user.role,
    }, 
    SECRET);
}

function getUser(token){
    if(!token) return null;
     try {
        return jwt.verify(token, SECRET);
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}