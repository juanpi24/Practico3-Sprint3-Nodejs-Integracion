//=================================
//Rutas de la API para superhéroes
//=================================

import express from 'express';
const router= express.Router();

// Controladores
import {
    obtenerTodosLosSuperheroesController,
    verSuperheroeController,
    mostrarFormularioAgregar,
    agregarSuperheroeController,
    mostrarFormularioEditar,
    actualizarSuperheroeController,
    eliminarSuperheroePorIDController
} from '../controllers/superheroesController.mjs';

// Importar este middleware y lo colocamos en la ruta POST
import {validarAgregar, validarEditar} from '../middlewares/validationMiddleware.mjs'
import {reglasValidacion} from '../validations/heroValidation.mjs';


// Mostrar todos los Superhéroes
router.get('/', obtenerTodosLosSuperheroesController);

// Mostrar formulario Agregar
router.get("/agregar", mostrarFormularioAgregar);

// Agregar - Validaciones + POST
router.post('/agregar', reglasValidacion, validarAgregar, agregarSuperheroeController); 

// Mostrar formulario Editar
router.get("/editar/:id", mostrarFormularioEditar);

// Editar - Validaciones + POST 
router.post('/editarhero/:id', reglasValidacion, validarEditar, actualizarSuperheroeController);

// Mostrar Superhéroes por ID
router.get("/:id", verSuperheroeController);

// Eliminar Superhéroes por ID (error al poner delete)
router.get('/eliminar/:id', eliminarSuperheroePorIDController);

export default router;