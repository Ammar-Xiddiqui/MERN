const mongoose = require('mongoose')

async function connectDB() {


    try{
    connectDB= await mongoose.connect(process.env.MONGODB_URI)
    console.log('connected to database')

    }catch(err){

        console.log('cant connected',err)

    }

    
    
}


module.exports=connectDB