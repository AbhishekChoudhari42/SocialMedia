const mongoose = require('mongoose')

const dbconn = async () => {
    const {connection} = await mongoose.connect("mongodb+srv://choudhariabhishek93:mongo4575@cluster0.1wbesk4.mongodb.net/?retryWrites=true&w=majority",{
        dbName:"Cluster0"
    });
}

module.exports =  dbconn