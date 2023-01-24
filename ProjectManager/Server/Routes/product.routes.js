const ProductController = require('../Controllers/product.controller')

module.exports = function(app){
    app.get('/api/test', ProductController.index)
    app.post('/api/create/product', ProductController.createProduct)
    app.get('/api/find/all', ProductController.findAll)
}