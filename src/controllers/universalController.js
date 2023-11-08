import { universalModel } from '../models/universalModel.js ';
import { validarUniversal } from '../validaciones/validarUniversal.js';

export class universalController {

     static async getAll(req, res) {
          try {
               const result = await universalModel.getAll();
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

      static async getById(req, res) {
          try {
               const result = await universalModel.getById(req.params.id);
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }
     
     static async getByTip(req, res) {
          try {
               const result = await universalModel.getByTip(req.params.tip);
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

     static async create(req, res) {
          const validacion = validarUniversal(req.body);
          
           if (validacion.error) {
               res.status(400).json({ message: JSON.parse(validacion.error.message) });
               return;
          }
          const result = await universalModel.create(validacion.data);
          res.json(result);
     }

     static async deleteById(req, res) {
          try {
               const result = await universalModel.deleteById(req.params.id);
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

     static async updateById(req, res) {
          const validacion = validarUniversal(req.body);
          if (validacion.error) {res.status(500).json(validacion);return;}
          const result = await universalModel.updateById(req.params.id, req.body);
          res.json(result);    
     }

}