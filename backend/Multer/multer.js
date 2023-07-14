const multer =require('multer')


const upload=multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{ cb(null,"Uploads")},
        filename:(req,file,cb)=>{
            cb(null,file.filename+".jpg")
        }

    })
}).single('testFile');

module.exports=upload;