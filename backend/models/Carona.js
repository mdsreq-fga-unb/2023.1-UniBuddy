const Sequelize = require("sequelize");
const db = require("../database/db");

const Carona = db.define('caronas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    vagas: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    origem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    destino: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.STRING,
        allowNull: false
    },
    horario: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Carona.sync();

module.exports = Carona;