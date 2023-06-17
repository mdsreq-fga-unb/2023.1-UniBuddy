const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const auth = require('../middleware/auth');

const notifiUtils = require('../utils/notificacao_utils');

router.get("/buscar", auth, async (req, res) => {
    try {
        const notificacoes = await notifiUtils.getNotificacoes(req.usuario.id);
        await notifiUtils.marcarComoLida(req.usuario.id);
        res.status(200).json({ notificacoes });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar notificacoes.', error: error.message });
    }
})

module.exports = router;