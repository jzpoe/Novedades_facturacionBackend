    import express from 'express';
    import novedadesController from '../controllers/novedadesController.js';
    const router = express.Router();


    router.post('/', novedadesController.create);
    //router.get('/:id', novedadesController.obtener);
    router.get('/', novedadesController.obtener);
    // router.put('/:id', novedadesController);
    // router.delete('/:id', novedadesController);

    export default router;