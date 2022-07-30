import {Router} from 'express';
import {CommentController} from '../controllers';

const CommentsApi = (router: Router) => {
    router.post('/', CommentController.post);
    /*router.put('/:id', ArticleController.update);*/
    router.get('/:id', CommentController.getById);
    //router.delete('/:id', ArticleController.delete);

    return router;
};

export default CommentsApi;
