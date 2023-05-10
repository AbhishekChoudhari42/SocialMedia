const router = require('express').Router();
const Conversations = require("../models/Conversations");
const dbconn = require('../utils/dbconn')
const mongoose = require('mongoose')

// adding new convo

router.post('/',async (req,res)=>{

    await dbconn();
    

    try{
        const savedConversation = await Conversations.create({
            members:[req.body.senderId,req.body.receiverId]

        })
        res.status(200).json(savedCoversation)
    }catch(err){
        console.log(err)
        res.status(401).send(err)

    }
})

router.get('/:userId',async (req,res)=>{
    await dbconn();

    try{
        const conversation = await Conversations.find({
            members:{$in:[req.params.userId]},

        }) 

        res.status(200).json(conversation)
    }catch(err){
        console.log(err)
    }
})

module.exports = router