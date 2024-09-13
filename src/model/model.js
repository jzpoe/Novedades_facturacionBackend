import mongoose from 'mongoose'


const novedadesSchema = mongoose.Schema({
    nombre:{
        type: String,
    required: true
    },
    ciudad:{
        type: String,
    required: true
    },
    novedad:{
        type: String,
    required: true
    },
    activoDevuelto:{
        type: String,
    required: true
    },
    activoNuevo:{
        type: String,
    required: true
    },
    
})

const novedadesModel = mongoose.model('Novedades', novedadesSchema)

export default novedadesModel;