/*import {Router} from 'express';
import articlesApi from './articles';

const routes = (router: Router) => {
    router.use(`/articles`, articlesApi(Router()));

    return router;
};

export default routes*/

import {Application, Router} from 'express';
import api from './articles'

class Routes {
    static configure(app: Application) {
        app.use('/api', api(Router()));
    }
}

module.exports = Routes;