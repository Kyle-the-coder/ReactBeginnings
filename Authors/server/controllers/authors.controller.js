const Author = require('../models/author.models')

module.exports.index = (req, res) =>{
    res.json({message: "hey from the controller"})
}

module.exports.createAuthor = (req, res) =>{
    Author.create(req.body)
        .then(createdAuthor=>{res.json(createdAuthor)})
        .catch(err=>res.status(400).json({message: "that didn't work ", err}))
}

module.exports.findAll = (req, res) => {
    Author.find()
        .then(results=>{
            res.json(results)
        })
        .catch(err=> {
            res.json(err)
        })
}

module.exports.findOne = (req, res) =>{
    Author.findOne({_id: req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err=>res.json(err))
}


module.exports.updateAuthor = (req, res) =>{
    Author.updateOne({_id:req.params.id}, req.body, {new:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err=>res.json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err=>res.json(err))
}


