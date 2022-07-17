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

    return articlerouter;
}

module.exports = routes;