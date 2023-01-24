const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Db connected'))
    .catch((err)=>console.log('an error',err))

