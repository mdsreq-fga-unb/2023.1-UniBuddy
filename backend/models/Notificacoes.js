const Sequelize = require("sequelize");
const db = require("../database/db");

const Notificacoes = db.define('notificacoes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idDestinatario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    conteudo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idCorrespondente: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    idCarona: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

Notificacoes.sync();

module.exports = Notificacoes;