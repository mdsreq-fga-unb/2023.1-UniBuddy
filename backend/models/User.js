const Sequelize = require('sequelize');
const db = require('../database/db');

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nomeCompleto: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Esse campo não pode ser vazio'
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'Email digitado é inválido!'
      }
    }
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Esse campo não pode ser vazio'
      }
    }
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Esse campo não pode ser vazio'
      }
    }
  }
});

User.sync();

module.exports = User;
