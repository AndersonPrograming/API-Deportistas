import { conexion } from './conexion/conexion.js';

//exportamos el modelo para poder utilizarlo en el controlador
export class InformesModel {

     // primer informe por periodo de tiempo y 1 criterio anidado
     static async getInforme1(deporte) {
          const result = await conexion.query(`
               SELECT CONCAT(p.primer_nombre,' ',p.primer_apellido) AS nombre_completo,
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
               WHERE d.nombre_deporte = ?`, [deporte]);
          return result[0];
     }

     // segundo informe por periodo de tiempo y 2 criterios anidados
     static async getInforme2([deporte, genero]) {
          const result = await conexion.query(`
          SELECT CONCAT(p.primer_nombre,' ',p.primer_apellido) AS nombre_completo,
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
               WHERE d.nombre_deporte = ? AND cu_sex.denominacion = ?`, [deporte, genero]);
          return result[0];
     }


}
