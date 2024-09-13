import novedadesModel from "../model/model.js";


const create = {
    async create(req, res) {
      try {
        const newNovedades = new novedadesModel({
          nombre: req.body.nombre,
          ciudad: req.body.ciudad,
          novedad: req.body.novedad,
          activoDevuelto: req.body.activoDevuelto,
          activoNuevo: req.body.activoNuevo,
        });
        
        // Guarda el documento usando .save()
        const savedNovedad = await newNovedades.save();
        res.status(201).json(savedNovedad);
      } catch (error) {
        res.status(500).json({ message: "Error al agregar la novedad", error });
      }
    },

    
        async obtener (req, res){
            try {
                const datos = await novedadesModel.find();

                res.status(200).json(datos)
            } catch (error) {
                res.status(500).json({ message: "Error al obtener los datos", error });

            }
        }

    
  };
  
  export default create;