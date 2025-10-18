import 'dotenv/config'; // Carga las variables de entorno
import express, { Express, Request, Response } from 'express';
import connectDB from './config/database';
// Conectar a la base de datos
connectDB();

const app: Express = express();
const PORT = process.env.PORT || 8000;

// Middleware para entender JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.send('¡API de TelecomPlus funcionando con MongoDB!');
});

// --- ESTA ES LA PARTE QUE SOLUCIONA TU PROBLEMA ---
// Le dice a Express que "escuche" peticiones en el puerto 8000.
// Esto es lo que mantiene el script corriendo y evita el "clean exit".
app.listen(PORT, () => {
  console.log(`⚡️[server]: Servidor corriendo en http://localhost:${PORT}`);
});