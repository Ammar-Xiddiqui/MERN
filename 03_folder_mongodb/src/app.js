const express = require('express')
const noteModel = require('./models/note.model')
const app=express()


app.use(express.json());




app.post('/notes',async (req , res)=>{
    const data = req.body
    await noteModel.create({
        title : data.title,
        desc : data.desc
    })


    res.status(201).json(

    {

        message:"note created",
    }
        
    )
})

app.get('/notes', async (req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:"data fetched correctly ",
        notes : notes
    })

})



app.delete('/notes/:id', async (req,res)=>{
    const id = req.params.id
    await noteModel.findOneAndDelete(
        _id=id,
    )

    res.status(200).json({
        message:"data deleted correctly ",
    })

})



app.patch('/notes/:id', async (req,res)=>{
    const id = req.params.id
    const desc = req.body.desc
    await noteModel.findOneAndUpdate(
        {_id:id},{desc:desc}
    )

    res.status(200).json({
        message:"data updated correctly ",
    })

})
module.exports=app