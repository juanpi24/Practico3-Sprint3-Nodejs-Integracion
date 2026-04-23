//==================================
//Archivo principal de la aplicación
//==================================
import express from 'express';
import session from "express-session";
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import flashMiddleware from './middlewares/flashMiddleware.mjs';

// Servidor
const app = express();
// Usa el puerto de la variable de entorno o 3002 por defecto
const PORT = process.env.PORT || 3002;

// Middleware para parsear JSON
//app.use(express.json());

// Middleware para parsear datos de formularios - (Solucion Error req.body undefined)
app.use(express.urlencoded({ extended: true }));

// Configurar EJS como Motor de vistas
app.set('view engine', 'ejs');

// Configurar sesiones
app.use(session({
  secret: "supersecret",
  resave: false,
  saveUninitialized: true
}));

// Middleare global para registrar solicitudes
const loggerMiddleware = (req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next(); //pasa el control al siguiente middleware o ruta
};
app.use(loggerMiddleware);


// mensajes globales
app.use(flashMiddleware);

// Conexión a MongoDB
connectDB();

// Configuración de rutas
app.use('/heroes', superHeroRoutes);
// redirección inicial
app.get("/", (req, res) => res.redirect("/heroes"));

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).render("404", { 
    title: "Página No Encontrada",
    url: req.originalUrl 
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
