
import {Application, Router} from 'express';
import articleApi from './articles'

class Routes {
    static configure(app: Application) {
        app.use('/api/articles', articleApi(Router()));
    }
}

module.exports = Routes;