const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("users", "root", "123456789", {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306 
});

module.exports = sequelize;