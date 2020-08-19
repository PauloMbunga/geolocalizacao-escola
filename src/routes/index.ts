import { Router } from 'express';

import provinciaRoute from './ProvinciaRoute';
import municipioRoute from './MunicipioRoute';
import escolaRoute from './EscolaRoute';


const routes = Router();

routes.use(provinciaRoute);
routes.use(municipioRoute);
routes.use(escolaRoute);


export default routes;