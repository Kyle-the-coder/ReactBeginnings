const BudaController = require('../controllers/buda.controllers')
const Buda = require('../models/buda.models')


module.exports = function(app){
    app.get('/api/test', BudaController.index)
    app.get('/api/buda', BudaController.findAllBuda)
    app.get('/api/budaclass', BudaController.findAllBudaClass)
    app.post('/api/buda', BudaController.createBuda)
    app.post('/api/budaclass', BudaController.createBudaClass)
    app.get('/api/buda/:id', BudaController.findOneBuda)
    app.get('/api/budaclass/:id', BudaController.findOneBudaClass)
    app.put('/api/buda/:id', BudaController.updateBudda)
    app.put('/api/budaclass/:id', BudaController.updateBuddaClass)
    app.delete('/api/buda/:id', BudaController.deleteBudda)
    app.delete('/api/budaclass/:id', BudaController.deleteBuddaClass)
}