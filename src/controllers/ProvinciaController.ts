import {Request,Response}  from 'express';
import { getRepository} from 'typeorm';
import Provincia from '../models/Provincia'; 

class ProvinciaController{

    async create (request:Request,response: Response){
    
      try {
        const repo = getRepository(Provincia);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
     
    } catch (err) {
        console.log('err.message :>> ', err.message);
        return response.status(400).send();
      }
    }


     async  index (request:Request,response: Response)  {
      response.json(await getRepository(Provincia).find());
    }


    async  show (request:Request,response: Response)  {

      const {id} = request.params;
     // const parsedId = String(id)
      response.json(await getRepository(Provincia).find({

         where:{
          description:id
             
         }
      }));
    }

  




}

export default ProvinciaController;