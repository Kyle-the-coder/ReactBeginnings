const mongoose = require('mongoose');

const ClassesSchema = new mongoose.Schema({
    className:{
        type: String
    },
    classDate:{
        type: String
    },
    classTime:{
        type: String
    }
})

const BudaClass = mongoose.model("BudaClass", ClassesSchema)
module.exports = BudaClass;