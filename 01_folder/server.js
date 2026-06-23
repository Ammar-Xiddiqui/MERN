const express = require("express")
const app = express()
app.listen(3000,()=>{
    console.log("server running")
})
app.get("/",(req,res)=>{
    res.send("hello ammar ")
})

app.get("/about",(req,res)=>{
    res.send("about page ")
})