import { Router } from "express";
import { ClubController } from "../controllers/clubController.js";

export const clubRouter = Router();

clubRouter.get('/', ClubController.getAll);
clubRouter.post('/', ClubController.create);
clubRouter.get('/:id', ClubController.getById);
clubRouter.delete('/:id', ClubController.deleteById);
clubRouter.patch('/:id', ClubController.updateById);
