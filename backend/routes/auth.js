const express=require("express");
const router=express.Router();
const {signup,login}=require("../controllers/authcontroller");
const {encryptPassword,checkPassword}=require("../middlewares/middleware");
const upload=require('../Multer/multer')

router.post("/signup",encryptPassword,upload,signup)

router.post("/signin",checkPassword,login)




module.exports=router