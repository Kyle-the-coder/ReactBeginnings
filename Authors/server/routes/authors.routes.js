const AuthorController = require('../controllers/authors.controller')

module.exports = function(app){
    app.get('/api/test', AuthorController.index)
    app.post('/api/author', AuthorController.createAuthor)
    app.get('/api/author', AuthorController.findAll)
    app.get('/api/author/:id',AuthorController.findOne)
    app.put('/api/author/:id', AuthorController.updateAuthor)
    app.delete('/api/author/:id', AuthorController.deleteAuthor)
}