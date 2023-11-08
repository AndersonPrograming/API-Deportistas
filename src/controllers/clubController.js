import { ClubModel } from '../models/clubModel.js';
import { validarClub } from '../validaciones/validarClub.js';

export class ClubController {

     static async getAll(req, res) {
          try {
               const result = await ClubModel.getAll();
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
     }

     static async create(req, res) {
          const validacion = validarClub(req.body);
          if(!validacion.success){res.status(422).json({ message: JSON.parse(validacion.error )});return;}
          const result = await ClubModel.create(validacion.data);
          res.json(result);
     }

     static async getById(req, res) {
          try {
               const result = await ClubModel.getById(req.params.id);
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

     static async deleteById(req, res) {
          try {
               const result = await ClubModel.deleteById(req.params.id);
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

     static async updateById(req, res) {
          try {
               const result = await ClubModel.updateById(req.params.id, req.body);
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

}