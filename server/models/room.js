module.exports = (sequelize, DataTypes) => {
    const ROOM = sequelize.define('ROOM', {
        uid: {
            type: DataTypes.INTEGER,
        },
        type: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        star: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        thumbnail: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        guest: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bedroom: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bathroom: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return ROOM;
};