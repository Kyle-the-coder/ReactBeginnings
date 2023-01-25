const { request } = require('express')
const { Product } = require('../Models/product.model')

module.exports.index = (req, res) => {
    res.json({ message: "heya from controller" })
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct)
        })
        .catch(err => res.json(err))
}

module.exports.findAll = (req, res) => {
    Product.find()
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.findOne = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(onePerson => {
            res.json(onePerson)
        })
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.updateOne({_id:req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err=>res.json(err))
}






