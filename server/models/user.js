module.exports = (sequelize, DataTypes) => {
  const USER = sequelize.define('USER', {
    email: { type: DataTypes.STRING(60), allowNull: false, unique: true },
    name: { type: DataTypes.STRING(40), allowNull: false },
    image: { type: DataTypes.TEXT, allowNull: false },
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return USER;
};