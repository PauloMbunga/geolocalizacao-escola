import {Request,Response}  from 'express';
import { getRepository} from 'typeorm';
import Escola from '../models/Escola'; 

class EscolaController{

    async create (request:Request,response: Response){
    
      try {
        const repo = getRepository(Escola);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
     
    } catch (err) {
        console.log('err.message :>> ', err.message);
        return response.status(400).send();
      }
    }


     async  index (request:Request,response: Response)  {
      response.json(await getRepository(Escola).find());
    }


    async  show (request:Request,response: Response)  {

      const {codigo} = request.params;
     // const parsedId = String(id)
      response.json(await getRepository(Escola).find({

         where:{
          codigo:codigo
             
         }
      }));
    }

  




}

export default EscolaController;