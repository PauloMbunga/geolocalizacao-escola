import {Request,Response}  from 'express';
import { getRepository} from 'typeorm';
import Municipio from '../models/Municipio'; 

class MunicipioController{

    async create (request:Request,response: Response){
    
      try {
        const repo = getRepository(Municipio);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
     
    } catch (err) {
        console.log('err.message :>> ', err.message);
        return response.status(400).send();
      }
    }


     async  show (request:Request,response: Response)  {

      const {id} = request.params;
     // const parsedId = String(id)
      response.json(await getRepository(Municipio).find({

         where:{
          provincia:id
             
         }
      }));
    }


  
    async  index (request:Request,response: Response)  {

    //  const {id} = request.params;

      response.json(await getRepository(Municipio).find())
    }



}

export default MunicipioController;