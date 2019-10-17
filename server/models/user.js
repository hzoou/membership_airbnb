module.exports = (sequelize, DataTypes) => {
    const USER = sequelize.define('USER', {
        google_id: {
            type: DataTypes.STRING(150),
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(80),
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });
    return USER;
};