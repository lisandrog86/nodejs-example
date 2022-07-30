import { NextFunction, Request, Response } from 'express';
import { Comment } from '../models'

class commentController {

    static async post(req: Request, res: Response) {
        const comment = new Comment(req.body);
        comment.save();
        return res.status(201).json(comment);
    }


    static async getById(req: Request, res: Response) {
        const commentsfound = await Comment.findById(req.params.id);
        if (commentsfound)
            res.status(200).json(commentsfound);
        else res.status(404).send({ message: 'Article not found' });
    }

    static async update(req: Request, res: Response, Next: NextFunction) {
        console.log(req.body.comments);
        console.log(req.body);

        const updatedComments = await Comment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedComments) {
            return Next(
                res.status(404).json({
                    message: "Comments Not found.",
                }));
        }

        return res.status(200).json(updatedComments);
    }


    static async delete(req: Request, res: Response, next: NextFunction ) {
        
        const removed = await Comment.findByIdAndRemove(req.params.id)

        if (removed) {
            return res.send("error");
        }
        return res.sendStatus(200);
    };

};

export default commentController;
