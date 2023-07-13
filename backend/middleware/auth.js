const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log("teste", req.headers);
    try {
        const token = req.headers.token;
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