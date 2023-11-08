import { RankingModel } from '../models/rankingModel.js';


export class RankingController {

     // funcion para obtener todos los rankings
     static async getAll(req, res) {
          try {
               const result = await RankingModel.getAll();
               res.json(result);

          } catch (error) {res.status(500).json({ message: error.message });}
     }
     // funcion para crear un ranking
     static async create(req, res) {
          try{
               const result = await RankingModel.create(req.body);
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
          

     }

     static async getById(req, res) {
          try {
               const result = await RankingModel.getById(req.params.id);
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
     }

     static async deleteById(req, res) {
          try {
               const result = await RankingModel.deleteById(req.params.id);
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
     }

     static async updateById(req, res) {
          try {
               const result = await RankingModel.updateById(req.params.id, req.body);
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
     }

}