const Buda = require('../models/buda.models')
const BudaClass = require("../models/classes.models")

module.exports.index = (req, res) => {
    res.json({ message: "hey from the controller" })
}

//Find All
module.exports.findAllBuda = (req, res) => {
    Buda.find()
        .then(results => { res.json(results) })
        .catch(err => res.status(400).json({ message: "not working", err }))
}

module.exports.findAllBudaClass = (req, res) => {
    BudaClass.find()
        .then(results => { res.json(results) })
        .catch(err => res.status(400).json({ message: "not working", err }))
}

//Create
module.exports.createBuda = (req, res) => {
    Buda.create(req.body)
        .then(createdBudda => res.json(createdBudda))
        .catch(err => res.status(400).json({ message: "not working", err }))
}

module.exports.createBudaClass = (req, res) => {
    BudaClass.create(req.body)
        .then(createdBudda => res.json(createdBudda))
        .catch(err => res.status(400).json({ message: "not working", err }))
}

//Find One
module.exports.findOneBuda = (req, res) => {
    Buda.findOne({ _id: req.params.id })
        .then(oneBuda => res.json(oneBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}

module.exports.findOneBudaClass = (req, res) => {
    BudaClass.findOne({ _id: req.params.id })
        .then(oneBudaClass => res.json(oneBudaClass))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}

//Update
module.exports.updateBudda = (req, res) => {
    Buda.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(updatedBuda => res.json(updatedBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}

module.exports.updateBuddaClass = (req, res) => {
    BudaClass.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(updatedBuda => res.json(updatedBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}

//Delete
module.exports.deleteBudda = (req, res) => {
    Buda.deleteOne({_id: req.params.id})
        .then(deletedBuda => res.json(deletedBuda))
        .catch(err=>res.status(400).json({message: "that didn't work", err}))
}

module.exports.deleteBuddaClass = (req, res) => {
    BudaClass.deleteOne({_id: req.params.id})
        .then(deletedBuda => res.json(deletedBuda))
        .catch(err=>res.status(400).json({message: "that didn't work", err}))
}