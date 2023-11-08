import { conexion } from './conexion/conexion.js';

//exportamos el modelo para poder utilizarlo en el controlador
export class ClubModel {

     static async getAll() {
          const result = await conexion.query(`
               SELECT c.id_club,
                    c.nombre_club As club,
                    c.tecnico_club As tecnico,
                    cu.denominacion AS ciudad
               FROM tb_club AS c
               INNER JOIN tb_catalogo_universal AS cu ON c.ciudad = cu.id_catalogo
          `);
          return result[0];
     }

     static async getById(id) {
          const result = await conexion.query(`
          SELECT c1.id_club,
               c1.nombre_club AS club,
               c1.tecnico_club AS tecnico,
               c2.denominacion AS ciudad
          FROM tb_club c1
          INNER JOIN tb_catalogo_universal c2 ON c1.ciudad = c2.id_catalogo
          WHERE id_club = ?`, [id]);
          return result[0];
     }

     static async create(data) {
          const result = await conexion.query('INSERT INTO tb_club SET ?', [data]);
          return result[0];
     }

     static async updateById(id, data) {
          const result = await conexion.query('UPDATE tb_club SET ? WHERE id_club = ?', [data, id]);
          return result[0];
     }

     static async deleteById(id) {
          const result = await conexion.query('DELETE FROM tb_club WHERE id_club = ?', [id]);
          return result[0];
     }


}
