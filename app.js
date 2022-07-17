const express = require('express');
const mongoose = require('mongoose');
//const logger = require('morgan');
const bodyParser = require('body-parser');

//const Routes = require('./routes');
//const articlerouter = express.Router();
const Article = require('./models/articleModel'); //This might not be necessary
const articlerouter = require('./routes/articles')(Article);


const app = express();
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/articles'); //Review later if this should go
const port = process.env.port || 3000;



app.use('/api', articlerouter);

app.get('/', (req, res) => {
    res.send('Welcome to the express example');
});

app.listen(port, () => {
    console.log('Running on port ' + port);
})