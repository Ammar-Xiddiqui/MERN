const {body,validationResult}=require("express-validator")


async function validateResult(req,res,next) {


    const error = validationResult(req)

    if(!error.isEmpty()){

        return res.status(401).json({
            message:"data is not appropraite",
            error:error.array()
        })
    }


    next()
    
}


const registerUserValidatorRules=[

    body("username")
    .isString()
    .withMessage("username must be string")
    .isLength({min:4,max:20})
    .withMessage('lengh is not approraite'),validateResult
]



module.exports=registerUserValidatorRules