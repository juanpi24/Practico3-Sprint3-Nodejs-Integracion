// Middleware global para mensajes - express-session
const flashMiddleware = (req, res, next) => {
  res.locals.mensaje = req.session.mensaje || null;
  res.locals.error = req.session.error || null;
  res.locals.errores = req.session.errores || [];
  res.locals.datos = req.session.datos || {};
    
    // Limpiamos la sesión para que los mensajes no se repitan
    delete req.session.mensaje;
    delete req.session.error;
    delete req.session.errores;
    delete req.session.datos;
  next();
};
export default flashMiddleware;