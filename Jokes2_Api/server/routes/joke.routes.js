const JokeController = require("../controllers/joke.controller");


module.exports = (app) => {
    app.get('/api/findall', JokeController.findAll);
    app.post('/api/create/joke', JokeController.createJoke)
    app.put('/api/update/joke/:id', JokeController.updateJoke)
    app.delete('/api/delete/joke/:id', JokeController.deleteOne)
    app.get('/api/findone/:id', JokeController.findOne)
    app.get('/api/find/random', JokeController.findOneRandom)
}