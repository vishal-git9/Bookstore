const express = require("express")
const BookModel = require("../Models/books.model")
const CheckAdmin = require("../Middlewares/admin.middleware")

const bookRouter = express.Router()


bookRouter.get("/books",async(req,res)=>{
    const queryObj = req.query
    try {
        const data = await BookModel.find(queryObj)
        res.status(200).send({msg:"here is the list of all books",data})
    } catch (error) {
        res.status(400).send({msg:"error while fetching data"})
    }
})

bookRouter.get("/books/:id",async(req,res)=>{
    const {id} = req.params
    try {
        const data = await BookModel.findById(id)
        res.status(200).send({msg:"here is the book",data})
    } catch (error) {
        res.status(400).send({msg:"error while fetching data"})
    }
})

bookRouter.post("/books",CheckAdmin,async(req,res)=>{
    try {
        const bookdata = new BookModel(req.body)
        await bookdata.save()
        res.status(201).send({msg:"your book has been added to your store"})
    } catch (error) {
        res.status(400).send({msg:"error while adding book please try later"})
    }
})

bookRouter.patch("/books/:id",CheckAdmin,async(req,res)=>{
    const {id} = req.params
    try {
        await BookModel.findByIdAndUpdate(id,req.body)
        res.status(204).send({msg:`your book's data has been updated succesfully`})
    } catch (error) {
        res.status(400).send({msg:"error while updating book please try later"})
    }
})
bookRouter.delete("/books/:id",CheckAdmin,async(req,res)=>{
    const {id} = req.params
    try {
        await BookModel.findByIdAndDelete(id)
        res.status(202).send({msg:`your book has been deleted succesfully`})
    } catch (error) {
        res.status(400).send({msg:"error while deleting book please try later"})
    }
})

module.exports = bookRouter