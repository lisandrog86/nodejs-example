const express = require('express');
const mongoose = require('mongoose');
//const logger = require('morgan');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/articles'); //Review later if this should go
const articlerouter = express.Router();
const port = process.env.port || 3000;
const Article = require('./models/articleModel'); //This might not be necessary

//Maybe this is not necessary
articlerouter.route('/articles')
    .get((req, res) => {
        
        const query = {};
        if (req.query.title) {
            query.title = req.query.title;
        }

        Article.find(query, (err, articles) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(articles);
            }
        })
    });

    //Why this is not working?
    articlerouter.route('/articles/:Id')
    .get((req, res) => {
        
        Article.findById(ObjectId(req.params.Id), (err, articles) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(articles);
            }
        })
    });

app.use('/api', articlerouter);

app.get('/', (req, res) => {
    res.send('Welcome to the express example');
});

app.listen(port, () => {
    console.log('Running on port ' + port);
})