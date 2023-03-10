const ProductController = require('../Controllers/product.controller')

module.exports = function(app){
    app.get('/api/test', ProductController.index)
    app.post('/api/product', ProductController.createProduct)
    app.get('/api/product', ProductController.findAll)
    app.get('/api/product/:id', ProductController.findOne)
    app.put('/api/product/:id', ProductController.updateProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct)
}