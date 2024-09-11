
const express = require('express');
const dotenv = require ('dotenv/config');
const router = require ('./src/routes/novedades');  // Asegúrate de incluir la extensión .js
const mongoose = require ('./src/db/db');  // También asegúrate de incluir .js aquí si es necesario
const cors = require('cors');


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