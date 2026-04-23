import { validationResult } from "express-validator";

// Middleware final para capturar errores Agregar
  export const validarAgregar = (req, res, next) => {
        const errores = validationResult(req);  // <--- Captura resultados
        //<--- Verifica si hay errores 
        if (!errores.isEmpty()) {      
          // envia para una sola vista EJS          
            return res.status(400).render("addSuperhero", {
              errores: errores.array(),
              hero: req.body
    });
        }
        // Procesar datos si no hay errores...
        next();
    }   


    // Middleware final para capturar errores Editar
  export const validarEditar = (req, res, next) => {
        const errores = validationResult(req);  // <--- Captura resultados
        //<--- Verifica si hay errores 
        if (!errores.isEmpty()) {      
          // envia para una sola vista EJS          
            return res.status(400).render("editSuperhero", {
              errores: errores.array(),
              //datos: req.body - hero is not defined
                hero: {
                   ...req.body,
                   _id: req.params.id   // 👈 agregás el id
                 }
    });
        }
        // Procesar datos si no hay errores...
        next();
    }   