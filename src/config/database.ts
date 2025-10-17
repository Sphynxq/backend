import mongoose from 'mongoose';
import 'dotenv/config'; // Asegúrate de que las variables de entorno se carguen

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      console.error('Error: MONGO_URI no está definida en el archivo .env');
      process.exit(1); // Termina el proceso si no hay URI
    }
    await mongoose.connect(mongoURI);
    console.log('MongoDB conectado exitosamente. ✅');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1); // Termina el proceso en caso de error de conexión
  }
};

export default connectDB;