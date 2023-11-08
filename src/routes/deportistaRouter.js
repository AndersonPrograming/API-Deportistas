import { Router } from "express";
import { DeportistaController } from "../controllers/deportistaController.js";
import { upload } from "../middlewares/imagenes.js";

export const deportistaRouter = Router();

deportistaRouter.get('/', DeportistaController.getAll);
deportistaRouter.get('/imagen/:imagen', DeportistaController.getImagenes);
deportistaRouter.post('/', upload.single('imagen'), DeportistaController.create);
deportistaRouter.get('/:id', DeportistaController.getById);
deportistaRouter.delete('/:id', DeportistaController.deleteById);
deportistaRouter.patch('/:id',upload.single('imagen'),  DeportistaController.updateById);
