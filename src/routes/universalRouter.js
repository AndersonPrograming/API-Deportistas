import { Router } from "express";
import { universalController } from "../controllers/universalController.js";

export const universalRouter = Router();

universalRouter.get('/', universalController.getAll);
universalRouter.post('/', universalController.create);
universalRouter.get('/:id', universalController.getById);
universalRouter.get('/tip/:tip', universalController.getByTip);
universalRouter.delete('/:id', universalController.deleteById);
universalRouter.patch('/:id', universalController.updateById);
