const express = require('express');
const cors = require('cors');
const port = 8000;
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('./server/config/mongoose.config')
require('./Server/Routes/product.routes')(app);

app.listen(port, ()=> {console.log('you are now on port ' + port)})