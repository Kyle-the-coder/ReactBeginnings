const mongoose = require('mongoose');

const BudaSchema = new mongoose.Schema({
    aboutMe:{
        type: String,
        required: true,
        minlength: [3, "About me needs to be more than 3 characters"]
    },
    aboutBudda:{
        type: String,
        required: true,
        minlength: [3, "About Budda needs to be more than 3 characters"]
    },
    ratesInfo:{
        type: String,
        required: true,
        minlength: [3, "Rate info is required"]
    },
    winterInfo:{
        type: String,
        minlength: [3, "Winter info must be at least 3 characters"]
    },
    springInfo:{
        type: String,
        minlength: [3, "Spring info must be at least 3 characters"]
    },
    buddaCrewInfo:{
        type: String,
        minlength: [3, "Budda Crew info must be at least 3 characters"]
    }
})

const Buda = mongoose.model("Buda", BudaSchema)
module.exports = Buda;