const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/registro", async (req, res) => {
    try {
        const novo_usuario = {
            nomeCompleto: req.body.nomeCompleto,
            email: req.body.email,
            senha: req.body.senha
        };
        await User.create(novo_usuario);
        res.status(201).json(novo_usuario);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao registrar o usuário.' });
    }
})

module.exports = router;