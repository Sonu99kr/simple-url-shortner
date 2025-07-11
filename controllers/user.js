const User = require("../models/users");
const {v4: uuidv4 } = require('uuid')
const {setUser} = require("../service/auth")
const bcrypt = require('bcrypt')

async function handleUserSignUp(req, res){
    const {name, email, password} = req.body;
    
    const existingUser = await User.findOne({email});
    if(existingUser)res.status(400).send('Email is already used');

    await User.create({
        name,
        email,
        password,
    });
    return res.render("home")
}

async function handleUserLogin(req, res){
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.render("login", {
            error: "Invalid Username or Passoword",
        });
    }

    const isPasswordMatch = await user.comparePassword(password);
    if(!isPasswordMatch){
        return res.render("login", {
            error: "Invalid Username or Passoword",
        })
    }

    const token = setUser(user);
    res.cookie("token", token);
    return res.redirect("/");
}

async function handleUserLogout(req, res){
    res.clearCookie("token");

    res.redirect("/login");
} 

module.exports = {
    handleUserSignUp,
    handleUserLogin,
    handleUserLogout,
}