import { NextFunction, Request, Response } from 'express';
import { Article } from '../models'

class articleController {
    static async post(req: Request, res: Response) {
        const article = new Article(req.body);
        article.save();
        return res.status(201).json(article);
    }


    static async get(req: Request, res: Response, next: NextFunction) {

        const getarticles = await Article.find()
        if (getarticles) {
            res.status(200).json(getarticles);
        }
        else {
            return next(
                res.status(404).json({
                    message: "Not found.",
                })
            );
        };
    }

    static async update(req: Request, res: Response, Next : NextFunction)
     {
        const updatedArticles = await Article.findByIdAndUpdate(
              req.params.id,
              req.body.article,
              {new: true}
          );
        
        if(!updatedArticles)
        {
            return Next(
                res.status(404).json({
                  message: "Article Not found.",
                }));
        }
      
        return res.status(200).json(updatedArticles);
    }


    static async delete(req: Request, res: Response, next: NextFunction ) {
        
        const removed = await Article.findByIdAndRemove(req.params.Id)

        if (removed) {
            return res.send("error");
        }
        return res.sendStatus(200);
    };

    static async getById(req: Request, res: Response) {
        console.log('Get by Id ' + req.params.Id)
        const articlefound = await Article.findById(req.params.id);
        if (articlefound)
                res.status(200).json(articlefound);
        else res.status(404).send({message: 'Article not found'});
    }
};

  export default articleController;
