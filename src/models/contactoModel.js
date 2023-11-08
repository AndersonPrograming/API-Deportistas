import { conexion } from './conexion/conexion.js';

//exportamos el modelo para poder utilizarlo en el controlador
export class ContactoModel {

     static async getAll() {
          const result = await conexion.query(`
               SELECT c.id_contacto,
                    CONCAT(d.primer_nombre,d.primer_apellido) AS nombre,
                    cu.denominacion as tipo_contacto,
                    c.contacto
               FROM tb_contacto AS c
               INNER JOIN tb_catalogo_universal AS cu ON c.tipo_contacto = cu.id_catalogo
               INNER JOIN tb_deportistas AS d ON c.deportista_contacto = d.id_deportista
          `);
          return result[0];
     }

     static async getById(id) {
          const result = await conexion.query(`
          SELECT c.id_contacto,
          CONCAT(d.primer_nombre,d.primer_apellido) AS nombre,
               cu.denominacion as tipo_contacto,
               c.contacto
          FROM tb_contacto AS c
          INNER JOIN tb_catalogo_universal AS cu ON c.tipo_contacto = cu.id_catalogo
          INNER JOIN tb_deportistas AS d ON c.deportista_contacto = d.id_deportista
          WHERE id_contacto = ?`, [id]);
          return result[0];
     }

     static async create(data) {
          const result = await conexion.query('INSERT INTO tb_contacto SET ?', [data]);
          return result[0];
     }

     static async updateById(id, data) {
          const result = await conexion.query('UPDATE tb_contacto SET ? WHERE id_contacto = ?', [data, id]);
          return result[0];
     }

     static async deleteById(id) {
          const result = await conexion.query('DELETE FROM tb_contacto WHERE id_contacto = ?', [id]);
          return result[0];
     }


}
