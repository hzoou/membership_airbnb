module.exports = (sequelize, DataTypes) => {
  const USER = sequelize.define('USER', {
    google_id: { type: DataTypes.STRING(150), unique: true },
    name: { type: DataTypes.STRING(40) },
    image: { type: DataTypes.TEXT },
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return USER;
};