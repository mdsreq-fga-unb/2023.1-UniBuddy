const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("railway", "root", "MDTekbSWqSEJArf2VE6t", {
    dialect: 'mysql',
    host: 'containers-us-west-84.railway.app',
    port: 6985 
  });

module.exports = sequelize;