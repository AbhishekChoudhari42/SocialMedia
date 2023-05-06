const mongoose =  require("mongoose");

const schema = new mongoose.Schema({
title:{
    type : String,
    required: true,
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true
},
createdAt:{
    type:Date,
    default:Date.now
}



})

module.exports = mongoose.models.Post  || mongoose.model("Post",schema)