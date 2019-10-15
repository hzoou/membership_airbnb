module.exports = (sequelize, DataTypes) => {
    const USER = sequelize.define('USER', {
        email: { type: DataTypes.STRING(30), allowNull: false, unique: true },
        name: { type: DataTypes.STRING(20), allowNull: false },
        image: { type: DataTypes.TEXT, allowNull: false },
    }, {
        timestamps: false,
        freezeTableName: true
    });

    USER.associate = (models) => {
        USER.belongsTo(models.ROOM);
        USER.belongsTo(models.RESERVATION);
    };

    return USER;
};