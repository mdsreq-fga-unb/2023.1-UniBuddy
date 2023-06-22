const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.body.token;
        const decode = jwt.verify(token, "shhh");
        req.usuario = decode;
        next();
    } catch (error) {
        return res.status(401).json({
            erro: true,
            message: "Falha na autenticação!"
        });
    }
}