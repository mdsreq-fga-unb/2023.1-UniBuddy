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
            telefone: req.body.telefone,
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
        res.status(400).json({ error: 'Erro ao registrar usuário.' });
    }
})

router.post("/login", async (req, res) => {
    const usuario = await User.findOne({
        attributes: ["id", "nomeCompleto", "email", "senha"],
        where: {
            email: req.body.email
        }
    });

    if(usuario === null){
        res.status(400).json({ error: 'Usuário não encontrado' });
    } else {
        if(!(await bcrypt.compare(req.body.senha, usuario.senha))){
            res.status(400).json({ error: 'Senha incorreta' });
        } else {
            const token = jwt.sign({id: usuario.id}, "shhh");
            res.status(202).json({ 
                error: 'Login efetuado: ' + usuario.nomeCompleto
                ,token
            });
        }
    }
})

router.get("/whatsapp", async (req, res) => {
    const telefone = req.query.telefone;
    const url = `https://wa.me/${telefone}`;

    res.redirect(url);
})

module.exports = router;