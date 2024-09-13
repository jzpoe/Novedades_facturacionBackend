
import express from 'express';
import dotenv from 'dotenv/config';
import router from './src/routes/novedades.js';  // Asegúrate de incluir la extensión .js
import mongoose from './src/db/db.js';  // También asegúrate de incluir .js aquí si es necesario
import cors from 'cors';


const app = express()
app.use(express.json());
app.use(cors({
    origin: 'https://novedades-facturacion.vercel.app', // Reemplaza con la URL de tu frontend
  }));

app.use('/novedades', router)

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log(`escuchando el puerto ${PORT}`));
} catch (error) {
    
}