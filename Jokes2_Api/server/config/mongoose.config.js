const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jokes_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("connected"))
    .catch(()=> console.log("not connected", err))