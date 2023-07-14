const mongoose= require('mongoose')
const User=new mongoose.Schema({
    username:String,
    name:String,
    password:String,
    file:String,
});

module.exports=mongoose.model('User',User);