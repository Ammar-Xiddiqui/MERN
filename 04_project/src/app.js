const express = require("express") 
const multer = require('multer')
const uploadFile=require('./services/storage.services')
const postModel = require('./models/post.model')
const app = express()
// app.use(express.json())


const uplaod = multer({storage:multer.memoryStorage()})


app.get('/posts', async (req,res)=>{

    const posts = await postModel.find()

    res.status(200).json({
        message:"fetch data successfuly",
        posts

    })

})


app.post('/create-post',uplaod.single("image"), async (req,res)=>{
    console.log(req.body)
    console.log(req.file)

    const result=await uploadFile(req.file.buffer)
    const post= await postModel.create({
        image:result.url,
        caption:req.body.caption

    })

    res.status(201).json({
        message:"post created successfully",
        post

    })
})




module.exports = app
