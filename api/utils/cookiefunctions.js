const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cookie = require('cookie')
const User = require('../models/User')


const cookieSetter = (res,token,set) =>{
    res.setHeader("Set-Cookie",cookie.serialize("token",set?token:"",{
        path:"/",
        httpOnly:true,
        maxAge: set?10*60*60*24*10:0
    }))
}

const generateToken = (_id) =>{
    return jwt.sign({_id},"secret",)
}

const checkAuth = async(req)=>{
    
    const cookie = req.headers.cookie    

    if(!cookie) return null

    const token = cookie.split("=")[1]
    const decoded = jwt.verify(token,"secret")
    
    return await User.findById(decoded._id);
}

module.exports = {checkAuth,cookieSetter,generateToken}