const mongoose=require('mongoose')



async function connectDB() {
    await mongoose.connect("mongodb+srv://ammar:Ammar%40377$@cluster0.pcjmmn8.mongodb.net/halley")
    console.log('connected to db')
    
}

module.exports= connectDB