import { Router } from "express";
import { ContactoController } from "../controllers/contactoController.js";

export const contactoRouter = Router();

contactoRouter.get('/', ContactoController.getAll);
contactoRouter.post('/', ContactoController.create);
contactoRouter.get('/:id', ContactoController.getById);
contactoRouter.delete('/:id', ContactoController.deleteById);
contactoRouter.patch('/:id', ContactoController.updateById);
