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
    static async delete(req: Request, res: Response) {
        const removed = await Article.findByIdAndRemove(req.params.Id)

        if (removed) {
            return res.send("error");
        }
        return res.sendStatus(204);
    };
};

//  return { post, get };



export default articleController;
