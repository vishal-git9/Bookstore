const express = require("express")
const { connection } = require("./Config/db")
const userRouter = require("./Routes/user.routes")
const bookRouter = require("./Routes/book.route")
require("dotenv").config()
const cors = require("cors")
const app = express()
app.use(cors)
app.use(express.json())
app.use("/api",userRouter)
app.use("/api",bookRouter)

app.listen(`${process.env.LOCAL_HOST}`,async()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log("db is not connected")
    }

    console.log(`running on ${process.env.LOCAL_HOST}`)
})