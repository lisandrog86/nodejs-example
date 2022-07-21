import {Router} from 'express';
import {ArticleController} from '../controllers';

const articlesApi = (router: Router) => {
    router.get('/', ArticleController.get);
    router.post('/', ArticleController.post);
    router.put('/:id', ArticleController.update);
    router.get('/:id', ArticleController.getById);
    router.delete('/:id', ArticleController.delete);

    return router;
};

export default articlesApi;
