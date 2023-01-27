const PetController = require('../controllers/pet.controller')
const Pet = require('../models/pet.model')

module.exports = function(app){
    app.get('/api/test', PetController.index)
    app.get('/api/pet', PetController.findAll)
    app.post('/api/pet', PetController.createPet)
    app.get('/api/pet/:id', PetController.findOne)
    app.put('/api/pet/:id', PetController.updatePet)
    app.delete('/api/pet/:id', PetController.deletePet)
}