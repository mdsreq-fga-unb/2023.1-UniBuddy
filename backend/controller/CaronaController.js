const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const auth = require('../middleware/auth');
const Carona = require('../models/Carona');

router.post("/cadastrar", auth, async (req, res) => {
    try {
        const nova_carona = {
            id_usuario: req.usuario.id,
            vagas: req.body.vagas,
            origem: req.body.origem,
            destino: req.body.destino,
            data: req.body.data,
            horario: req.body.horario
        }

        await Carona.create(nova_carona);
        res.status(201).json(nova_carona);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao cadastrar a carona.' });
    }
})

module.exports = router;