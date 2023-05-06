const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean
  })

const userModel = mongoose.model("Userdb",userSchema)

module.exports = userModel