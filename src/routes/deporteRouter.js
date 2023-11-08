import { Router } from "express";
import { DeporteController } from "../controllers/deporteController.js";

export const deporteRouter = Router();

deporteRouter.get('/', DeporteController.getAll);
deporteRouter.post('/', DeporteController.create);
deporteRouter.get('/:id', DeporteController.getById);
deporteRouter.delete('/:id', DeporteController.deleteById);
deporteRouter.patch('/:id', DeporteController.updateById);
