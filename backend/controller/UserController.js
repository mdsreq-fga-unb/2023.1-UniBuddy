const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post("/registro", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);

        const novo_usuario = {
            nomeCompleto: req.body.nomeCompleto,
            email: req.body.email,
            senha: await bcrypt.hash(req.body.senha, salt)
        };

        const email = await User.findOne({where: {email: novo_usuario.email}});

        if(email === null){
            await User.create(novo_usuario);
            res.status(201).json(novo_usuario);
        } else {
            res.status(400).json({ error: 'Usuário já existe' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Erro ao registrar o usuário.' });
    }
})

module.exports = router;