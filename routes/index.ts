
import {Application, Router} from 'express';
import articleApi from './articles';
import commentsApi from './comments'


class Routes {
    static configure(app: Application) {
        app.use('/api/articles', articleApi(Router()));
        app.use('/api/comments', commentsApi(Router()))
    }
}

module.exports = Routes;