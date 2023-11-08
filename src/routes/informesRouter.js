import { Router } from 'express';
import { InformesController } from '../controllers/informeController.js';


export const informesRouter = Router();

informesRouter.get('/1c/:deporte', InformesController.getInforme1);
informesRouter.get('/2c/:deporte/:genero', InformesController.getInforme2);

