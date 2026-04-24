export const normalizarPoderes = (req, res, next) => {

  if (req.body.poderes && typeof req.body.poderes === "string") {
    req.body.poderes = req.body.poderes
      .split(',')
      .map(p => p.trim())
      .filter(p => p);
  }

  next();
};

export const normalizarAliados = (req, res, next) => {

  if (req.body.aliados && typeof req.body.aliados === "string") {
    req.body.aliados = req.body.aliados
      .split(',')
      .map(p => p.trim())
      .filter(p => p);
  }

  next();
};

export const normalizarEnemigos = (req, res, next) => {

  if (req.body.enemigos && typeof req.body.enemigos === "string") {
    req.body.enemigos = req.body.enemigos
      .split(',')
      .map(p => p.trim())
      .filter(p => p);
  }

  next();
};