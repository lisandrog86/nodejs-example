const express = require('express');
const articleController = require('../controllers/articleController');

function routes(Article) {
    const articlerouter = express.Router();
    const controller = articleController(Article);

    articlerouter.route('/articles')
        .post((req, res) => {
            const art = new Article(req.body);
            art.save();
            res.status(201).json(art);
        })

        .get(controller.get);
            
           

    //Middleware
    articlerouter.use('/articles/:Id', (req, res, next) => {
        Article.findById(req.params.Id, (err, art) => {
            if (err) {
                res.send(err);
            }

            if (art) {
                req.art = art;
                return next();
            }

            return res.sendstatus(404);
        });
    });//

    articlerouter.route('/articles/:Id')
        .get((req, res) => res.json(req.art))

        .put((req, res) => {
            const { art } = req;

            art.body = req.body.body;
            art.title = req.body.title;
            art.author = req.body.author;
            art.save();
            return res.json(art);
        })

        .delete((req, res) => { 
            req.art.remove((err) =>{
                if(err){
                    return res.send(err);
                }
                return res.sendStatus(204);
            });
        });

    return articlerouter;
}

module.exports = routes;