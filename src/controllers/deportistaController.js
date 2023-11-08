import { DeportistaModel } from '../models/deportistaModel.js';
import { validarDeportista, validarDeportistaUpdated } from '../validaciones/validarDeportita.js';
import path, { dirname } from 'path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';


export class DeportistaController {

     // funcion para obtener la imagen
     static async getImagenes(req, res) {
          try {
               const img = req.params.imagen;
               let ruta = path.join(dirname(fileURLToPath(import.meta.url)), '../public/uploads/', img);

               if (!fs.existsSync(ruta)) {
                    ruta = path.join(dirname(fileURLToPath(import.meta.url)), '../public/uploads/', 'no-imagen.jpg');
               }
               res.sendFile(ruta)

          } catch (error) {res.status(500).json({ message: error.message });}
     }
     // funcion para obtener todos los deportistas
     static async getAll(req, res) {
          try {
               const result = await DeportistaModel.getAll();
               const SERVER = process.env.SERVER;

               const imagen = result.map((deportista) => {
                    deportista.imagen = `${SERVER}/api/deportista/imagen/${deportista.imagen}`;
                    return deportista;
               });
               res.json(result);

          } catch (error) {res.status(500).json({ message: error.message });}
     }
     
     static async getById(req, res) {
          try {
               const result = await DeportistaModel.getById(req.params.id);
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
     }

     // funcion para crear un deportista
     static async create(req, res) {
          let imagen = 'no-imagen.jpg';
          if(req.file) { imagen = req.file.filename; }
     
          req.body.imagen = imagen;
          req.body.fecha_nacimiento = parseInt(req.body.fecha_nacimiento);
          req.body.lateralidad = parseInt(req.body.lateralidad);
          req.body.sexo = parseInt(req.body.sexo);
          req.body.club = parseInt(req.body.club);
          req.body.deporte = parseInt(req.body.deporte);
          req.body.posicion = parseInt(req.body.posicion);
          req.body.peso = parseInt(req.body.peso);

          const validacion = validarDeportista(req.body);

          if (validacion.error) {
               res.status(400).json({ message: JSON.parse(validacion.error.message) });
               return;
          }

          const result = await DeportistaModel.create(validacion.data);
          res.json(result);

     }

     static async updateById(req, res) {
          try{
               const deportistaAnterior = await DeportistaModel.getById(req.params.id);
               const imagenAnterior = deportistaAnterior[0].imagen;
               if(imagenAnterior > 0){
                    req.body.imagen = imagenAnterior;
               }else{
                    req.body.imagen = 'no-imagen.jpg';
               }
               const url = path.join(dirname(fileURLToPath(import.meta.url)), '../public/uploads/', imagenAnterior);
               if(fs.existsSync(url) && imagenAnterior !== 'no-imagen.jpg') {
                    fs.unlink(url, (err) => {
                         if (err) {console.error(err); return;}
                    })
               }

          }catch(error) {res.status(500).json({ message: error.message });}
          
          if(req.file) { req.body.imagen = req.file.filename;}


          const validacion = validarDeportistaUpdated(req.body);

          if (validacion.error) {
               res.status(400).json({ message: JSON.parse(validacion.error.message) });
               return;
          }
         
          const result = await DeportistaModel.updateById(req.params.id, validacion.data);
          res.json(result);
          
         
     }
     
     static async deleteById(req, res) {
          try {
               const result = await DeportistaModel.deleteById(req.params.id);
               res.json(result);
          } catch (error) {
               res.status(500).json({ message: error.message });
          }
     }

}