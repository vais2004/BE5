require('./db/db.connect')

const Post = require('./models/post.model')
const User = require('./models/user.model')

const userData={
    name:"John",
    email:"john@gmail.com"
}

const addUser = async()=>{
    try{
        const newUser = new User(userData)
        await newUser.save()
        //return userData
    }catch(error){
        console.log('Error: ', error)
    }
}

addUser
