
import { Router } from 'express';
import ProvinciaController from '../controllers/ProvinciaController';

const ProvinciaRouter = Router();



const provinciaController = new ProvinciaController();


ProvinciaRouter.post('/provincia', provinciaController.create);
ProvinciaRouter.get('/provincia', provinciaController.index);
ProvinciaRouter.get('/provincia/:id', provinciaController.show);



export default ProvinciaRouter;


