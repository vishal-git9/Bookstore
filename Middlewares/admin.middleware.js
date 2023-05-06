const jwt = require("jsonwebtoken")

const CheckAdmin = (req,res,next)=>{
    const token = req.headers.authorization
    jwt.verify(token,"user",(err,decoded)=>{
        if(decoded){
            next()
        }else{
            res.status(400).send({msg:"user is not authorized please login via right credentials"})
        }
    })
}

module.exports = CheckAdmin