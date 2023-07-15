const mongoose= require('mongoose')
const User1=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    //image:[{data:Buffer, contentType:String}],
    
 });

module.exports=mongoose.model('User',User1);