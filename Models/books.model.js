const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title: String,
    author: String,
    category: String,
    price: Number,
    quantity: Number
  })

const BookModel = mongoose.model("Bookdb",BookSchema)

module.exports = BookModel