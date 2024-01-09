const mongoose = require('mongoose');
const {Schema} = mongoose

const UserSchema = new Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type: Number,
        required : true
    },
    password:{
        type:String,
        requireed:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Staff = mongoose.model('staff', UserSchema)
module.exports = Staff