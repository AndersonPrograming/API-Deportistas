import app from './app.js';
import dotenv from 'dotenv';

// Configuramos el puerto
dotenv.config();
const PORT = process.env.PORT || 3000;
const SERVER = process.env.SERVER;

app.listen(PORT, () => {
     console.log(`Listening on ${SERVER}/api/deportista`);
});
