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

// 유지복수가 어려움
db.USER.hasMany(db.ROOM, { foreignKey: 'userId', sourceKey: 'id' });
db.ROOM.belongsTo(db.USER, { foreignKey: 'userId', targetKey: 'id' });

db.USER.hasMany(db.RESERVATION, { foreignKey: 'userId', sourceKey: 'id' });
db.RESERVATION.belongsTo(db.USER, { foreignKey: 'userId', targetKey: 'id' });

db.ROOM.hasMany(db.RESERVATION, { foreignKey: 'roomId', sourceKey: 'id' });
db.RESERVATION.belongsTo(db.USER, { foreignKey: 'roomId', targetKey: 'id' });

module.exports = db;