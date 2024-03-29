const multer =require('multer')


const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){ cb(null,"Uploads")},
        filename:function(req, file ,cb){
            cb(null,file.fieldname+Date.now()+".jpg")
        }

    })
}).single("testFile");

module.exports=upload;