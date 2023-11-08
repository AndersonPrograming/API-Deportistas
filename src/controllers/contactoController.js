import { ContactoModel } from '../models/contactoModel.js';


export class ContactoController {

     // funcion para obtener todos los rankings
     static async getAll(req, res) {
          try {
               const result = await ContactoModel.getAll();
               res.json(result);

          } catch (error) {res.status(500).json({ message: error.message });}
     }
     // funcion para crear un ranking
     static async create(req, res) {
          try{
               const result = await ContactoModel.create(req.body);
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
          

     }

     static async getById(req, res) {
          try {
               const result = await ContactoModel.getById(req.params.id);
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
     }

     static async deleteById(req, res) {
          try {
               const result = await ContactoModel.deleteById(req.params.id);
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
     }

     static async updateById(req, res) {
          try {
               const result = await ContactoModel.updateById(req.params.id, req.body);
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
     }

}