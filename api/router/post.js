const express = require('express')
const router = express.Router()
const {asyncError,errorHandler} = require('../utils/errorHandler')
const bcrypt = require('bcrypt');
const Post = require('../models/Post')
const dbconn = require('../utils/dbconn')
const mongoose = require('mongoose')
const {checkAuth,cookieSetter,generateToken} = require('../utils/cookiefunctions')

router.get("/myposts",asyncError(async(req,res) => {
    
    await dbconn();

    let user = await checkAuth(req)
    
    if(!user) return errorHandler(res,401,"Please Login first")
    
    let posts = await Post.find({
        user:user._id
    })

    res.json({
        success: true,
        posts
    })
    
}))


router.post("/createpost",asyncError(async(req,res) => {

    await dbconn();

    let {title} = req.body


    let user = await checkAuth(req)
    
    await Post.create({
        title:title,
        user:user._id
    })

    res.json({
        success: true,
        message:"Post Created"
    })

}))

router.get("/delete/:id",asyncError(async(req,res) => {
    
    await dbconn();

    let user = await checkAuth(req)

    let postID = req.query.id
    let post  = await Post.findById(postID)

    if(!post) return errorHandler(res,401,"Post not found")

    if(!post.user.equals(user._id)) return errorHandler(res,401,"Please Login")

    await Post.findByIdAndRemove(postID,{
        title:req.body.title
    })



    res.json({
        success: true,
        message:"Post Deleted"
    })
    
}))

router.get("/update/:id",asyncError(async(req,res) => {
    
    await dbconn();


    let user = await checkAuth(req)

    let postID = req.query.id
    let post  = await Post.findById(postID)

    if(!post) return errorHandler(res,401,"Post not found")

    if(!post.user.equals(user._id)) return errorHandler(res,401,"Please Login")

    await Post.findByIdAndUpdate(postID,{
        title:req.body.title
    })



    res.json({
        success: true,
        message:"Post Updated"
    })

    

    
    
}))



module.exports = router