const Sequelize = require('sequelize');
const db = require('../database/db');

const Solicitacao = db.define('solicitacoes', {
    idCarona: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idMotorista: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idPassageiro1: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    idPassageiro2: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    idPassageiro3: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    idPassageiro4: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

Solicitacao.sync()

// verifica se existe alteração na model que não está no BD
// User.sync({ alter: true })

module.exports = Solicitacao;