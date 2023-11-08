import { conexion } from './conexion/conexion.js';

//exportamos el modelo para poder utilizarlo en el controlador
export class DeporteModel {

     static async getAll() {
          const result = await conexion.query(`
               SELECT d.id_deporte,
                    d.nombre_deporte As deporte,
                    ca.denominacion AS categoria,
                    d.popularidad,
                    c.nombre_club As club
               FROM tb_deporte AS d
               INNER JOIN tb_club AS c ON d.club = c.id_club
               INNER JOIN tb_catalogo_universal AS ca ON d.categoria_deporte = ca.id_catalogo
          `);
          return result[0];
     }

     static async getById(id) {
          const result = await conexion.query(`
          SELECT d1.id_deporte, 
               d1.nombre_deporte As deporte,
               c2.denominacion AS categoria,
               d1.popularidad, 
               c1.nombre_club As club
          FROM tb_deporte  d1
          INNER JOIN tb_club c1 ON d1.club = c1.id_club
          INNER JOIN tb_catalogo_universal c2 ON d1.categoria_deporte = c2.id_catalogo
          WHERE id_deporte = ?`, [id]);
          return result[0];
     }

     static async create(data) {
          const result = await conexion.query('INSERT INTO tb_deporte SET ?', [data]);
          return result[0];
     }

     static async updateById(id, data) {
          const result = await conexion.query('UPDATE tb_deporte SET ? WHERE id_deporte = ?', [data, id]);
          return result[0];
     }

     static async deleteById(id) {
          const result = await conexion.query('DELETE FROM tb_deporte WHERE id_deporte = ?', [id]);
          return result[0];
     }


}
