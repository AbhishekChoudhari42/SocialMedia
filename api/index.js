const mongoose = require('mongoose')
const express = require('express')
const app = express();
const auth = require('./router/auth')
const post = require('./router/post')
const conversations = require('./router/conversations')
const messages = require('./router/messages')
app.use(express.json());
const dotenv = require('dotenv')
dotenv.config()

app.get('/',(req, res)=>{
    res.send('sdsd')
})


app.use('/auth',auth)
app.use('/post',post)
app.use('/conversations',conversations)
app.use('/messages',messages)




app.listen(4000);