import mysql from 'mysql2/promise';

import config from './config.json' assert { type: 'json' };



//conexion a la base de datos
const conexion = await mysql.createConnection(config);
conexion.connect((err) => {
     if (err) {
          console.log('Error de conexion');
          return;
     }
     console.log('Conectado a la base de datos');

});

export { conexion };