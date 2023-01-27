const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: [true, "Author name is required" ],
        minlength: [3, "Author's name must be 3 or more characters"]
    }
}, {timestamps:true})

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;