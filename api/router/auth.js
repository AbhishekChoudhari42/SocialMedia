const express = require('express')
const router = express.Router()
const {asyncError,errorHandler} = require('../utils/errorHandler')
const bcrypt = require('bcrypt');
const User = require('../models/User')
const dbconn = require('../utils/dbconn')
const mongoose = require('mongoose')
const {checkAuth,cookieSetter,generateToken} = require('../utils/cookiefunctions')

router.post("/register",asyncError(async(req,res) => {

    const
    {name,email,password} = req.body;
    
    await dbconn();
    
    let user = await User.findOne({email:email})

    if(!name || !email || !password ) return errorHandler(res,401,"Enter all the fields data")

    if(user) return errorHandler(res,401,"user already registered with this username")
    
    const hashedPassword = await bcrypt.hash(password,10)
    
    user = await User.create({name:name,email:email,password:hashedPassword})

    const token = generateToken(user._id)

    cookieSetter(res,token,true)

    res.status(200).json({success:true,message:"Registered Successfully"})

}))


router.post("/login",asyncError(async(req,res) => {

    await dbconn();

    let {email, password} = req.body;

    if(!email || !password ) return errorHandler(res,401,"Enter all the fields data")

    let user = await User.findOne({email}).select("+password")

    if(!user) return errorHandler(res,401,"Invalid email or password")
    
    const authStatus = await bcrypt.compare(password,user.password)
    
    if(!authStatus) return errorHandler(res,401,"Invalid email or password")


    const token = generateToken(user._id)

    cookieSetter(res,token,true)

    res.status(200).json({success:true,message:"Welcome "+user.name})

}))

router.get('/logout',asyncError(async(req,res) => {

    cookieSetter(res,null,false)
    res.status(200).json({success:true,message:"Logged Out Successfully"})

}))

module.exports = router