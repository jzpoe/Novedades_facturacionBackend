    const express = require('express');
    const novedadesController = require ('../controllers/novedadesController');
    const router = express.Router()


    router.post('/', novedadesController.create);
    //router.get('/:id', novedadesController.obtener);
    router.get('/', novedadesController.obtener);
    // router.put('/:id', novedadesController);
    // router.delete('/:id', novedadesController);

    module.exports= router;