const express = require("express")
const validateRules=require("./middleware/validator.middleware")
const app= express()

app.use(express.json())

app.get("/",(req,res)=>{

    res.status(200).json({
        message: "hello world"
    })


})


app.post('/register', validateRules ,(req,res)=>{

    const {username,email,password}=req.body


    res.status(200).json({message:"all okay"})

})
module.exports=app