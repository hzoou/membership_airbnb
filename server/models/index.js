const db = {};
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.USER = require('./user')(sequelize, Sequelize);
db.ROOM = require('./room')(sequelize, Sequelize);
db.RESERVATION = require('./reservation')(sequelize, Sequelize);

db.USER.hasMany(db.ROOM, { foreignKey: 'user_id', sourceKey: 'id' });
db.ROOM.belongsTo(db.USER, { foreignKey: 'user_id', targetKey: 'id' });

db.USER.hasMany(db.RESERVATION, { foreignKey: 'user_id', sourceKey: 'id' });
db.RESERVATION.belongsTo(db.USER, { foreignKey: 'user_id', targetKey: 'id' });

db.ROOM.hasMany(db.RESERVATION, { foreignKey: 'room_id', sourceKey: 'id' });
db.RESERVATION.belongsTo(db.USER, { foreignKey: 'room_id', targetKey: 'id' });

module.exports = db;