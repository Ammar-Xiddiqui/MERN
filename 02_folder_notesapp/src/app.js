const express= require("express")
const app = express()
const notes=[]
app.use(express.json())

app.post('/notes',(req, res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"data post succesfully"
    })
})



app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"data fetched successfully",
        notes:notes


    })
})


app.delete("/notes/:index",(req,res)=>{
    const index=req.params.index
    data=notes[index]
    delete notes[index]
    res.status(200).json({
        message:"node with following  data deleted succesfully ",
        data: data,
        notes:notes




    })
})




app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const desc = req.body.desc
    notes[index].description = desc

    res.status(200).json({
        message:"updated succesfully ",
        notes:notes

    })
})
module.exports=app