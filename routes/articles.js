const express = require('express');
function routes(Article) {
    const articlerouter = express.Router();

    articlerouter.route('/articles')
        .post((req, res) => {
            const art = new Article(req.body);
            art.save();
            res.status(201).json(art);
        })

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

    articlerouter.route('/articles/:Id')
        .get((req, res) => {
            console.log(req.params.Id);
            Article.findById(req.params.Id, (err, art) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(art);
                }
            });
        })

        .put((req, res) => {
            Article.findById(req.params.Id, (err, art) => {
                if (err) {
                    res.send(err);
                }

                art.body = req.body.body;
                art.title = req.body.title;
                art.author = req.body.author;
                art.save();
                return res.json(art);
                
            });
        });

    return articlerouter;
}

module.exports = routes;