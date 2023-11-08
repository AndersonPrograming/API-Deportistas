import { conexion } from './conexion/conexion.js';

//exportamos el modelo para poder utilizarlo en el controlador
export class DeportistaModel {

     static async getAll() {
          const result = await conexion.query(`
               SELECT p.id_deportista,
                    p.imagen,
                    p.primer_nombre,
                    p.segundo_nombre,
                    p.primer_apellido,
                    p.segundo_apellido,
                    p.fecha_nacimiento,
                    p.peso AS peso_kg,
                    cu_lat.denominacion AS lateralidad, 
                    p.altura AS altura_cm,
                    cu_sex.denominacion AS sexo, 
                    c.nombre_club AS club,
                    d.nombre_deporte AS deporte,
                    cu_pos.denominacion AS posicion
               FROM tb_deportistas AS P
               INNER JOIN tb_catalogo_universal AS cu_lat ON p.lateralidad = cu_lat.id_catalogo 
               INNER JOIN tb_catalogo_universal AS cu_sex ON p.sexo = cu_sex.id_catalogo
               INNER JOIN tb_catalogo_universal AS cu_pos ON p.posicion = cu_pos.id_catalogo  
               INNER JOIN tb_club AS c ON p.club = c.id_club
               INNER JOIN tb_deporte AS d ON p.deporte = d.id_deporte
          `);
          return result[0];
     }

     static async getById(id) {
          const result = await conexion.query('SELECT * FROM tb_deportistas WHERE id_deportista = ?', [id]);
          return result[0];
     }

     static async create(data) {
          const result = await conexion.query('INSERT INTO tb_deportistas SET ?', [data]);
          return result[0];
     }

     static async updateById(id, data) {
          const result = await conexion.query('UPDATE tb_deportistas SET ? WHERE id_deportista = ?', [data, id]);
          return result[0];
     }
     static async deleteById(id) {
          const result = await conexion.query('DELETE FROM tb_deportistas WHERE id_deportista = ?', [id]);
          return result[0];
     }


}
