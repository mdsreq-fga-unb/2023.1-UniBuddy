const User = require("../models/User")
const Carona = require('../models/Carona');
const Solicitacao = require('../models/Solicitacoes');
const db = require('../database/db');
const Sequelize = require('sequelize');

exports.getVagaCarona = async function(idCarona) {
    const query = `
        SELECT
            CASE
                WHEN idPassageiro1 IS NULL THEN 'idPassageiro1'
                WHEN idPassageiro2 IS NULL THEN 'idPassageiro2'
                WHEN idPassageiro3 IS NULL THEN 'idPassageiro3'
                WHEN idPassageiro4 IS NULL THEN 'idPassageiro4'
                ELSE false
            END AS vaga
        FROM
            solicitacoes
        LIMIT 1;
    `;

    const result = await db.query(query, {
        type: Sequelize.QueryTypes.SELECT
    });
    const existeVaga = result[0].vaga;
    console.log(existeVaga);

    if (existeVaga == false) {
        return null;
    } else {
        return existeVaga;
    }

}

exports.getIdPassageiro = async function(idCarona) {
    try {
        const passageiros = await Solicitacao.findOne({
            where: {idCarona},
            attributes: ['idPassageiro1', 'idPassageiro2', 'idPassageiro3', 'idPassageiro4'],
        });

        const ids_passageiros = [];
        for (const col in passageiros.dataValues) {
            const id = passageiros[col];
            if (id !== null) {
                ids_passageiros.push(id);
            }
        }
        console.log(ids_passageiros);
        return ids_passageiros;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.getIdMotorista = async function(idCarona){
    try {
        const motorista = await Solicitacao.findOne({
            where: {idCarona},
            attributes: ['idMotorista']
        });

        console.log(motorista.idMotorista);
        return motorista.idMotorista;
    } catch (error) {
        console.error(error);
        throw error;
    }
}