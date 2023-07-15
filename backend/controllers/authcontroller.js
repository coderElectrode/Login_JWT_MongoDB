const {createUser}=require("../db/db");
const  jwt = require('jsonwebtoken');
var fs=require('fs')
const { readFileSync, writeFileSync } =require('fs')




const signup=(req,res,next)=>{
    var img=fs.readFileSync(req.file.path);
    var encod_img=img.toString('base64');

    const user={ username:req.body.username,

        name:req.body.name,
        password:req.body.password,
        image:{
            data:Buffer.from(encod_img,'base64'),
            contentType:req.file.mimetype,
        },
    }

    //console.log(user);

   let result= createUser(user)
   if(result){
    res.json({
        status:"Success",
        messag:"User Created"

    })

   }else{
    // if you invoke next like this anywhere in your code 
    // it will just hit the error middlewar
   // throw new Error("Errorororo")
   next(new Error("User Already Exists"))

   }

   
}



const login=(req,res)=>{

    // issuing the jwt 
   const  token = jwt.sign({username:req.body.username}, process.env.JWTKEY);
   res.json({
        status:"Success",
        token:token,
        message:"User Logged In"

    })



}

module.exports={
    signup,
    login
}