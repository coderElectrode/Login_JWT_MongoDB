// Store all the users in it ----->
// DAO (Data access object layer --->which interacts with the database)
const { v4: uuidv4 } = require('uuid');
const User=require('./schema')

const addImgtoDB=(image)=>{
    console.log("Image", image);

    User.updateOne({ username: "Milind123" }, {
          $push: {
              image: image
          }
      }).then(()=>{
        console.log("File Uploaded ")
      })
  
  }

const createUser=(userData)=>{
    //console.log("DB:",userData)
  const user=new User(userData);
  user.save().then(()=>{
    console.log("User Created")
  })

}

const getAllUsers=()=>{
    return USERS;
}

const getUserByUsername=(username)=>{

    return USERS.find(ele=>ele.username==username);

}

const getUserbyId=(id)=>{
    return USERS.find(ele=>ele.id==id);


}

const updateUserbyIdDb=(id,data)=>{
    let filteredAt= USERS.filter(ele=>ele.id!=id);
    data.id=id
    filteredAt.push(data);
    USERS=[...filteredAt]
   return true


}

module.exports={
    getAllUsers,
    getUserByUsername,
    createUser,
    getUserbyId,
    updateUserbyIdDb,
    addImgtoDB
}