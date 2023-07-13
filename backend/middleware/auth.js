const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Obter o token do header
    const decode = jwt.verify(token, 'shhh'); // Verificar o token usando a chave secreta 'shhh'
    req.usuario = decode;
    next();
  } catch (error) {
    return res.status(401).json({
      erro: true,
      message: 'Falha na autenticação!'
    });
  }
};
