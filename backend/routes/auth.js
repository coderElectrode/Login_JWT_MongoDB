const express=require("express");
const router=express.Router();
const {signup,login,convert64,addImg}=require("../controllers/authcontroller");
const {encryptPassword,checkPassword}=require("../middlewares/middleware");
const upload=require('../Multer/multer')

router.post("/signup",encryptPassword,signup)
router.post("/signin",checkPassword,login)

router.put("/addImg",upload,convert64,addImg)




module.exports=router