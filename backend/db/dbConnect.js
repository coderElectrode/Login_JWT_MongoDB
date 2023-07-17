const mongoose=require('mongoose')
const user=require('./schema');
const DBURL="mongodb+srv://milind1995mp:yJzBXxceATYUSWGL@cluster0.8k3rymr.mongodb.net/?retryWrites=true&w=majority"

const connect=()=>{mongoose.connect(DBURL).then(()=>{
    console.log("Databse Connected");
})}

module.exports= connect;
