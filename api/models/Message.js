const mongoose =  require("mongoose");

const schema = new mongoose.Schema({
conversationId:{
    type : String,
    required: true,
},
sender:{
    type:String
},
text:{
    type:String
}


},{timestamps:true})

module.exports = mongoose.models.Message  || mongoose.model("Message",schema)
