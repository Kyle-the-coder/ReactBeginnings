const Joke = require("../models/joke.model")

//Find All
module.exports.findAll = (req, res) =>{
    Joke.find()
        .then(result => {
            res.json(result)})
        .catch(err => console.log(err))
}
//Find One
module.exports.findOne = (req, res) =>{
    Joke.findById({_id: req.params.id})
        .then(result=>{
            res.json({result: result})
        })
        .catch(err=> res.json({message: "not worked"}, err))
}
//Find One Random
module.exports.findOneRandom = (req, res) =>{
    Joke.aggregate().sample(1)
        .then(results=>{
            res.json({joke: results})
        })
        .catch(err=> res.json({message: "not random"}, err))
}
//Create One
module.exports.createJoke = (req, res) =>{
    Joke.create(req.body)
        .then(result=>{
            jokeArr.push(result)
            console.log(jokeArr)
            res.json({joke: result})})
        .catch(err => console.log(err))
};
//Update One
module.exports.updateJoke = (req, res) =>{
    console.log(req)
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators:true},
        console.log(req.params.id)
    )
        .then(updatedJoke => {
            res.json({joke: updatedJoke})
        })
        .catch((err)=>{
            res.json({message:'Not working'}, err)
        })
};
//Delete One
module.exports.deleteOne = (req, res) =>{
    console.log(req)
    Joke.deleteOne({_id: req.params.id})
        .then(result=>{
            res.json({result: result})
        })
        .catch(err => {
            res.json({message: "something went wrong", err})
        })
}
