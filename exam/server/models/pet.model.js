const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName:{
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet's name must be 3 or more characters"]
    },
    petType:{
        type: String,
        required: [true, "Pet type is required"],
        minlength: [2, "Pet's type must be at least 2 characters"]
    },
    petDescription:{
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    skill1: String,
    skill2: String,
    skill3: String
}, {timestamps:true})

const Pet = mongoose.model("Pet", PetSchema)
module.exports = Pet;
