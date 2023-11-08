import { conexion } from './conexion/conexion.js';

//exportamos el modelo para poder utilizarlo en el controlador
export class universalModel {

     static async getAll() {
          const result = await conexion.query(`
               SELECT 
                    c1.id_catalogo,
                    c2.denominacion AS tipo_catalogo,
                    c1.denominacion
               FROM tb_catalogo_universal c1
               INNER JOIN tb_catalogo_universal c2 ON c1.tipo_catalogo = c2.id_catalogo
          `);
          return result[0];
     }

     static async getById(id) {
          const result = await conexion.query(`
          SELECT
               c1.id_catalogo AS id_catalogo,
               c2.denominacion AS tipo_catalogo,
               c1.denominacion AS denominacion
          FROM tb_catalogo_universal c1
          INNER JOIN tb_catalogo_universal c2 ON c1.tipo_catalogo = c2.id_catalogo
          WHERE c1.id_catalogo = ?`, [id]);
          return result[0];
     }

      static async getByTip(tip) {
          const result = await conexion.query(`
          SELECT
               c1.id_catalogo AS id_catalogo,
               c2.denominacion AS tipo_catalogo,
               c1.denominacion AS denominacion
          FROM tb_catalogo_universal c1
          INNER JOIN tb_catalogo_universal c2 ON c1.tipo_catalogo = c2.id_catalogo
          WHERE c1.tipo_catalogo = ?`, [tip]);
          return result[0];
     }

     static async create(data) {
          const result = await conexion.query('INSERT INTO tb_catalogo_universal SET ?', [data]);
          return result[0];
     }

     static async updateById(id, data) {
          const result = await conexion.query('UPDATE tb_catalogo_universal SET ? WHERE id_catalogo = ?', [data, id]);
          return result[0];
     }

     static async deleteById(id) {
          const result = await conexion.query('DELETE FROM tb_catalogo_universal WHERE id_catalogo = ?', [id]);
          return result[0];
     }
}
