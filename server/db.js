require('dotenv').config()
const mongoose = require("mongoose")

const Connection = async () =>{
    const url = process.env.mongoURL
    try{
        await mongoose.connect(url)
        console.log("connected to database successfully")
    }catch(error){
        console.log("error connecting to mongoose", error.message)
    }
}

module.exports = Connection