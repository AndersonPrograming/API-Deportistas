import { DeporteModel } from '../models/deporteModel.js';
import { validarDeporte, validarDeporteUpdated } from '../validaciones/validarDeporte.js';

export class DeporteController {

     static async getAll(req, res) {
          try {
               const result = await DeporteModel.getAll();
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

     static async create(req, res) {
          const validacion = validarDeporte(req.body);
          if (validacion.error) {res.status(400).json({ message: JSON.parse(validacion.error.message )});return;}
          const result = await DeporteModel.create(req.body);
          res.json(result); 
     }

     static async getById(req, res) {
          try {
               const result = await DeporteModel.getById(req.params.id);
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

     static async deleteById(req, res) {
          try {
               const result = await DeporteModel.deleteById(req.params.id);
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

     static async updateById(req, res) {
          const validacion = validarDeporteUpdated(req.body);
          if (validacion.error) {res.status(400).json({ message: validacion.error.message });return;}
          const result = await DeporteModel.updateById(req.params.id, req.body);
          res.json(result);
     }

}