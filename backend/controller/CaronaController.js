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

router.delete("/deletar/:id", auth, async (req, res) => {
    try {
        const carona = await Carona.findOne({where: {id: req.params.id}});

        if (!carona) {
            return res.status(404).json({ message: 'Carona não encontrado.' });
        } else if (carona.id_usuario != req.usuario.id) {
            return res.status(403).json({ message: 'Você não tem permissão para excluir essa carona.' });
        } else {
            await carona.destroy();
            res.status(200).json({ message: 'Carona excluída com sucesso.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir carona.', error: error.message });
    }
})

module.exports = router;