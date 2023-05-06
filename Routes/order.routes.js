const express = require("express")
const CheckAdmin = require("../Middlewares/admin.middleware")

const orderRouter = express.Router()

orderRouter.post("/orders",CheckAdmin,(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})