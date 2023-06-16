const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const auth = require('../middleware/auth');
const Carona = require('../models/Carona');
const Solicitacao = require('../models/Solicitacoes');

const notifiUtils = require('../utils/notificacao_utils');
const caronaUtils = require('../utils/carona_utils');

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

        const carona = await Carona.create(nova_carona);

        const nova_solicitacao = {
            idCarona: carona.id,
            idMotorista: carona.id_usuario,
            idPassageiro1: null,
            idPassageiro2: null,
            idPassageiro3: null,
            idPassageiro4: null
        }

        console.log(nova_solicitacao);
        await Solicitacao.create(nova_solicitacao);

        res.status(200).json({ message: 'Carona e solicitação criadas com sucesso.' });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao cadastrar carona.', error });
    }
})

router.delete("/deletar/:id", auth, async (req, res) => {
    try {
        const carona = await Carona.findOne({where: {id: req.params.id}});
        const solicitacao = await Solicitacao.findOne({where: {idCarona: req.params.id}});

        if (!carona) {
            return res.status(404).json({ message: 'Carona não encontrado.' });
        } else if (carona.id_usuario != req.usuario.id) {
            return res.status(403).json({ message: 'Você não tem permissão para excluir essa carona.' });
        } else {
            const ids_passageiros = await caronaUtils.getIdPassageiro(req.params.id);
            for (let i = 0; i < ids_passageiros.length; i++){
                const notificacao = await notifiUtils.criaNotificacao(
                    ids_passageiros[i],
                    "A carona que você solicitou foi deletada pelo motorista."
                );
            }

            await carona.destroy();
            await solicitacao.destroy();
            res.status(200).json({ message: 'Carona excluída com sucesso.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir carona.', error: error.message });
    }
})

router.get("/vizualizar", async (req, res) => {
    try {
        const caronas = await Carona.findAll();

        res.status(200).json({ message: caronas });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar caronas.', error: error.message });
    }
})

router.post("/solicitar/:idCarona", auth, async (req, res) => {
    try {
        const solicitacao = await Solicitacao.findOne({where: {idCarona: req.params.idCarona}});
        const vaga = await caronaUtils.getVagaCarona(req.params.idCarona);
        console.log(vaga);

        if(!solicitacao) {
            return res.status(404).json({ message: 'Carona não encontrado.' });
        } else if (vaga === null) {
            return res.status(404).json({ message: 'Carona solicitada nâo tem vaga.' });
        } else {
            var obj = {};
            obj[vaga] = req.usuario.id;
            await Solicitacao.update(
                obj,
                {where: {idCarona: req.params.idCarona}}
            );
        }
        res.status(200).json({ message: "Solicitação feita com sucesso", vaga });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar caronas.', error: error.message });
    }
})

module.exports = router;