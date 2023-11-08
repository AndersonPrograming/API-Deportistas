import { Router } from "express";
import { RankingController } from "../controllers/rankingController.js";

export const rankingRouter = Router();

rankingRouter.get('/', RankingController.getAll);
rankingRouter.post('/', RankingController.create);
rankingRouter.get('/:id', RankingController.getById);
rankingRouter.delete('/:id', RankingController.deleteById);
rankingRouter.patch('/:id', RankingController.updateById);
