const mongoose = require('mongoose')


async function connectDB(){

    await mongoose.connect('mongodb+srv://ammar:Ammar%40377$@cluster0.pcjmmn8.mongodb.net/project-01')
    console.log('connect db ')
}


module.exports=connectDB;