const Pet = require('../models/pet.model')

module.exports.index = (req, res) =>{
    res.json({message: "hey from the controller"})
}
//Find All
module.exports.findAll = (req, res) => {
    Pet.find()
        .then(results =>{res.json(results)})
        .catch(err=>res.status(400).json({message: "that didn't work ", err}))
}
//Create
module.exports.createPet = (req, res) =>{
    Pet.create(req.body)
        .then(createdPet => res.json(createdPet))
        .catch(err=>res.status(400).json({message: "that didn't work ", err}))
}
//Find One
module.exports.findOne = (req, res) =>{
    Pet.findOne({_id: req.params.id})
        .then(onePet => res.json(onePet))
        .catch(err=>res.status(400).json({message: "that didn't work ", err}))
}
//Update
module.exports.updatePet = (req, res) =>{
    Pet.updateOne({_id:req.params.id}, req.body, {new:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err=>res.status(400).json({message: "that didn't work ", err}))
}
//Delete
module.exports.deletePet = (req, res) =>{
    Pet.deleteOne({_id:req.params.id})
        .then(deletedPet => res.json(deletedPet))
        .catch(err=>res.status(400).json({message: "that didn't work ", err}))
}

        
