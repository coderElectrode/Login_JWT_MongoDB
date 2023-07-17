// Store all the users in it ----->
// DAO (Data access object layer --->which interacts with the database)
const { v4: uuidv4 } = require('uuid');
const User1 = require('./schema')

const addImgtoDB = (image) => {
    console.log("Image", image);

    User1.updateOne({ username: "Milind123" }, {
        $push: {
            image: image
        }
    }).then(() => {

        console.log("File Uploaded ")
    })

    return true;

}

const createUser = (userData) => {
    return new Promise((res, rej) => {
        User1.findOne({ Email: userData.Email }).then(data => {
            if (data) {
                rej("User already Exist");
            }
            else {
                const user = new User1(userData);
                res(user.save());
            }
        }).catch(err=>{rej(err);
        
        })
    })



}

const getAllUsers = () => {
    return USERS;
}

const getUserByUsername = async(email) => {

 const usr=  await User1.findOne({Email:email});
//  console.log("User From DB",usr)
 return usr;

}

const getUserbyId = (id) => {
    return USERS.find(ele => ele.id == id);


}

const updateUserbyIdDb = (id, data) => {
    let filteredAt = USERS.filter(ele => ele.id != id);
    data.id = id
    filteredAt.push(data);
    USERS = [...filteredAt]
    return true


}

module.exports = {
    getAllUsers,
    getUserByUsername,
    createUser,
    getUserbyId,
    updateUserbyIdDb,
    addImgtoDB
}