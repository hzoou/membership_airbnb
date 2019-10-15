const db = {};
const config = {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "operatorsAliases": false
};
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.USER = require('./user')(sequelize, Sequelize);
db.ROOM = require('./room')(sequelize, Sequelize);
db.RESERVATION = require('./reservation')(sequelize, Sequelize);

module.exports = db;