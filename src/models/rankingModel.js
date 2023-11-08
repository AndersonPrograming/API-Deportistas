import { conexion } from './conexion/conexion.js';

//exportamos el modelo para poder utilizarlo en el controlador
export class RankingModel {

     static async getAll() {
          const result = await conexion.query(`
               SELECT r.id_ranking,
                    CONCAT(d.primer_nombre," ",d.primer_apellido) AS nombre,
                    r.bloqueos,
                    r.ataques,
                    r.defensas,
                    r.servicios,
                    r.canastas,
                    r.goles,
                    r.atajadas
               FROM tb_ranking AS r
               INNER JOIN tb_deportistas AS d ON r.deportista_ranking = d.id_deportista
          `);
          return result[0];
     }

     static async getById(id) {
          const result = await conexion.query(`
          SELECT r.id_ranking, 
          CONCAT(d.primer_nombre,d.primer_apellido) AS nombre,
                    r.bloqueos,
                    r.ataques,
                    r.defensas,
                    r.servicios,
                    r.canastas,
                    r.goles,
                    r.atajadas
          FROM tb_ranking  r
          INNER JOIN tb_deportistas AS d ON r.deportista_ranking = d.id_deportista
          WHERE id_ranking = ?`, [id]);
          return result[0];
     }

     static async create(data) {
          const result = await conexion.query('INSERT INTO tb_ranking SET ?', [data]);
          return result[0];
     }

     static async updateById(id, data) {
          const result = await conexion.query('UPDATE tb_ranking SET ? WHERE id_ranking = ?', [data, id]);
          return result[0];
     }

     static async deleteById(id) {
          const result = await conexion.query('DELETE FROM tb_ranking WHERE id_deporte = ?', [id]);
          return result[0];
     }


}
