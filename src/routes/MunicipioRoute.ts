
import { Router } from 'express';
import MunicipioController from '../controllers/MunicipioController';

const MunicipioRouter = Router();



const municipioController = new MunicipioController();


MunicipioRouter.post('/municipio', municipioController.create);
MunicipioRouter.get('/municipio', municipioController.index);
MunicipioRouter.get('/municipio/:id', municipioController.show);



export default MunicipioRouter;


