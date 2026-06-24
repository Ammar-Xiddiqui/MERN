const express = require('express')
const authController = require('../controllers/auth.controller')

const router = express.Router();


router.post('/register',authController.registerUser )
router.get('/register',(req,res)=>{
    res.status(200).json({
        message:"cookies get",
        token:req.cookies

    })
})


module.exports=router;