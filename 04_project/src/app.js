const express = require("express") 
const multer = require('multer')

const app = express()
app.use(express.json())

const uplaod = multer({storage:multer.memoryStorage()})


app.post('/create-post',uplaod.single("image"), async (req,res)=>{
    console.log(req.body)
    console.log(req.file)

    res.status(200).json()
})
module.exports = app
