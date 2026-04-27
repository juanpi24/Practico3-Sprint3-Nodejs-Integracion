// middlewares/normalizarArrays.mjs

export const normalizarArrays = (campos = []) => {
  return (req, res, next) => {

    campos.forEach(campo => {

      let valor = req.body[campo];
    //if (!req.body[campo]) return;
    // Si no hay valor 👉 Lo convierte en array vacío
    if (!valor) {
        req.body[campo] = [];
        return;
      }

      // Si ya es array → limpiar
      if (Array.isArray(valor)) {
        req.body[campo] = valor
          .map(v => v.trim())
          .filter(Boolean);
      }

      // Si es string → convertir a array
      else if (typeof valor === "string") {
        req.body[campo] = valor
          .split(',')
          .map(v => v.trim())
          .filter(Boolean);
      }

    });

    next();
  };
};













// export const normalizarPoderes = (req, res, next) => {

//   if (req.body.poderes && typeof req.body.poderes === "string") {
//     req.body.poderes = req.body.poderes
//       .split(',')
//       .map(p => p.trim())
//       .filter(p => p);
//   }

//   next();
// };

// export const normalizarAliados = (req, res, next) => {

//   if (req.body.aliados && typeof req.body.aliados === "string") {
//     req.body.aliados = req.body.aliados
//       .split(',')
//       .map(p => p.trim())
//       .filter(p => p);
//   }

//   next();
// };

// export const normalizarEnemigos = (req, res, next) => {

//   if (req.body.enemigos && typeof req.body.enemigos === "string") {
//     req.body.enemigos = req.body.enemigos
//       .split(',')
//       .map(p => p.trim())
//       .filter(p => p);
//   }

//   next();
// };