
import { Router } from 'express';
import EscolaController from '../controllers/EscolaController';

const EscolaRouter = Router();



const escolaController = new EscolaController();


EscolaRouter.post('/escola', escolaController.create);
EscolaRouter.get('/escola', escolaController.index);
EscolaRouter.get('/escola/:id', escolaController.show);



export default EscolaRouter;


