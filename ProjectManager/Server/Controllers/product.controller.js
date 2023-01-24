const {Product} = require('../Models/product.model')

module.exports.index = (req, res) => {
    res.json({message: "heya from controller"})
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct)
        })
        .catch(err=>res.json(err))
}

module.exports.findAll = (req, res) => {
    Product.find()
        .then(results=>{
            res.json(results)
        })
        .catch(err=> {
            res.json(err)
        })
}