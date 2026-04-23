//==============================
//Controladores para superhéroes
//==============================
import {
    obtenerTodosLosSuperheroes, 
    obtenerPorId,
    agregarSuperheroes, 
    actualizarSuperheroes, 
    eliminarSuperheroesPorID
} from '../services/superheroesService.mjs';


//Obtener todos los superhéroes
 export async function obtenerTodosLosSuperheroesController(req, res) {
    try{
        const heroes= await obtenerTodosLosSuperheroes();
       // renderizar dashboard.ejs 
       res.render("dashboard",{heroes});
    } catch(error){
        res.status(500).send({mensaje: 'Error al obtener los superhéroes', error: error.message});
    }
 }

//Obtener un superhéroe por ID
export async function verSuperheroeController (req, res) {
  try {
    const idHeroe= req.params.id;
    const hero = await obtenerPorId(idHeroe);

    if (!hero) {
      req.session.mensaje = {
        tipo: "error",
        texto: "Superhéroe no encontrado"
      };
      return res.redirect("/heroes");
    }

    res.render("viewSuperhero", { hero });

  } catch (error) {
    req.session.mensaje = {
      tipo: "error",
      texto: "Error al cargar el perfil del Superhéroe"
    };
    res.redirect("/heroes");
  }
};


// Mostrar formulario Agregar (error de no enviar datos al abrir el formulario)
export const mostrarFormularioAgregar = (req, res) => {
  res.render("addSuperhero", { errores: [], datos: {}}); 
};

// Agregar a la BD
export async function agregarSuperheroeController(req, res) {
        
    try {
      const nuevoheroe=req.body;
    // ✔ guardar en DB
      await agregarSuperheroes(nuevoheroe);

    // ✔ mensaje de sesión
    req.session.mensaje = {
      tipo: "success",
      texto: "Superhéroe agregado correctamente"
    };

   // ✔ redirigir
   res.redirect("/heroes");

  } catch (error) {
         return res.render("addSuperhero", {
             errores: [{ msg: "Error al guardar el superhéroe en la BD" }],
             datos: req.body
             });
           }
};

// Mostrar el formulario de edición
export async function mostrarFormularioEditar (req, res) {
    const idHeroe= req.params.id;
    const hero = await obtenerPorId(idHeroe);
           
  if (!hero) {
      req.session.mensaje = {
        tipo: "error",
        texto: "Superhéroe no encontrado"
      };
      return res.redirect("/heroes");
    }

   res.render("editSuperhero", {hero});
}

// Procesar la actualización de superhéroe
export async function actualizarSuperheroeController(req, res) {
      
  try {       const idHeroe= req.params.id;
              const datosActualizados= req.body;
         
        // // Si los poderes vienen como string "Volar, Fuerza"
        //   if (typeof datos.poderes === 'string') {
        //      datos.poderes = datos.poderes
        //     .split(',')           // Divide por la coma -> ['Volar', ' Fuerza']
        //     .map(p => p.trim())   // Quita espacios -> ['Volar', 'Fuerza']
        //     .filter(p => p !== ''); // Elimina elementos vacíos
        //   }
      // Ahora 'datos.poderes' es un Array listo para Mongoose
       const actualizado= await actualizarSuperheroes(idHeroe,datosActualizados);

       if (!actualizado) {
            req.session.mensaje = {
                tipo: "error",
                texto: "El superhéroe no existe"
              };
              return res.redirect("/heroes");
        }
    // ✔ mensaje de sesión
          req.session.mensaje = {
            tipo: "success",
            texto: "Superhéroe actualizado correctamente"
          };
   // ✔ redirigir
            res.redirect("/heroes");
          } catch (error) {
                return res.render("editSuperhero", {
                    errores: [{ msg: "Error al actualizar el superhéroe en la BD" }],
                    datos: req.body
                });
          }
}

//Eliminar superhéro por ID
export async function eliminarSuperheroePorIDController(req, res) {
    try {
         const idHeroe= req.params.id;
         const eliminado= await eliminarSuperheroesPorID(idHeroe);
       
    if (!eliminado) {
     req.session.mensaje = {
        tipo: "error",
        texto: "El superhéroe no existe"
      };
      return res.redirect("/heroes");
    }

    req.session.mensaje = {
      tipo: "success",
      texto: "Superhéroe eliminado correctamente"
    };

    res.redirect("/heroes");

  } catch (error) {
    req.session.mensaje = {
      tipo: "error",
      texto: "Error al eliminar el superhéroe"
    };
    res.redirect("/heroes");
  }
};
        
   
    

