const router = require('express').Router();
const Message = require("../models/Message");
const dbconn = require('../utils/dbconn')
const mongoose = require('mongoose')

// adding new msg

router.post('/',async (req,res)=>{

    await dbconn();
    

    try{
        const newMessage = await Message.create(req.body)
        res.status(200).json(newMessage)
    }catch(err){
        console.log(err)
        res.status(401).send(err)

    }
})


router.get('/:conversationId',async (req,res)=>{

    await dbconn();
    

    try{
        
        const messages = await Message.find({
            conversationId : req.params.conversationId
        })
        res.status(200).json(messages);

    }catch(err){
        console.log(err)
        res.status(401).send(err)

    }
})

router.get('/:userId',async (req,res)=>{
    await dbconn();

    try{
        // const conversation = await Conversations.find({
        //     members:{$in:[req.params.userId]},

        // }) 

        // res.status(200).json(conversation)
    }catch(err){
        console.log(err)
        res.status(401).send(err)
    }
})

module.exports = router