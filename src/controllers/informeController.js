import { InformesModel } from '../models/informeModel.js';
// import PDFDocumen from 'pdfkit';
import PDFDocument from 'pdfkit-table';
import fs from 'fs';


export class InformesController {

     static async getInforme1(req, res) {
          try {
               const result = await InformesModel.getInforme1(req.params.deporte);
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

     static async getInforme2(req, res) {
          const { deporte, genero } = req.params;
          try {
               const result = await InformesModel.getInforme2([deporte, genero]);
               res.json(result);
          } catch (error) {res.status(500).json({ message: error.message });}
     }

}