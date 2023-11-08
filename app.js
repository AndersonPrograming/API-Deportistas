import express, { json } from 'express';
import cors from 'cors';

// importamos las Rutas
import { deportistaRouter } from './src/routes/deportistaRouter.js';
import { deporteRouter } from './src/routes/deporteRouter.js';
import { clubRouter } from './src/routes/clubRouter.js';
import { universalRouter } from './src/routes/universalRouter.js';
import { rankingRouter} from './src/routes/rankingRouter.js';
import { contactoRouter} from './src/routes/contactoRouter.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import { informesRouter } from './src/routes/informesRouter.js';



// Inicializamos express
const app = express();

// Middlewares
app.use(json());
app.use(cors());
app.disable('x-powered-by');

// configuramos el directorio de archivos estaticos
app.use(express.static('./public'));

// Aplicamos las rutas
app.use('/api/deportista', deportistaRouter);
app.use('/api/deporte', deporteRouter);
app.use('/api/club', clubRouter);
app.use('/api/universal', universalRouter);
app.use('/api/ranking', rankingRouter);
app.use('/api/contacto', contactoRouter);
app.use('/api/informe', informesRouter);

// Ruta principal
app.use((req, res) => {
     res.send(`Welcome to the API`);
});

// Manejador de errores
app.use(errorHandler)


export default app;