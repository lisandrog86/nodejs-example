const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

const Routes = require('./routes');

const articlerouter = require('./routes/articles')(Article);


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

const port = process.env.port || 3000;


app.use('/api', articlerouter);

app.get('/', (req, res) => {
    res.send('Welcome to the express example');
});


Routes.configure(app);

const start = async () => {
    await mongoose.connect('mongodb://localhost/crud-express'
        //'mongodb://localhost:27017/articles'
        );

    app.listen(port, () => {
        console.log(`Express server listening on port ${port}`);
    });
};

start();