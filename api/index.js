const mongoose = require('mongoose')
const express = require('express')
const app = express();
const auth = require('./router/auth')
app.use(express.json());
const dotenv = require('dotenv')
dotenv.config()

app.get('/',(req, res)=>{
    res.send('sdsd')
})


app.use('/auth',auth)




app.listen(4000);