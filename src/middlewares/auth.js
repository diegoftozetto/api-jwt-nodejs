const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  let isTokenValid;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      isTokenValid = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.log('Erro ao verificar token.');
    }
  }

  if (isTokenValid) {
    next();
  } else {
    console.log("Usuário não autorizado...");
    res.status(401).json({ error: 'Não autorizado, token inválido!' });
  }
}

module.exports = auth;
