module.exports = (sequelize, DataTypes) => {
    const ROOM = sequelize.define('ROOM', {
        uid: { type: DataTypes.INTEGER },
        type: { type: DataTypes.STRING(15) },
        title: { type: DataTypes.TEXT },
        star: { type: DataTypes.DOUBLE },
        thumbnail: { type: DataTypes.TEXT },
        price: { type: DataTypes.INTEGER },
        guest: { type: DataTypes.INTEGER },
        bedroom: { type: DataTypes.INTEGER },
        bed: { type: DataTypes.INTEGER },
        bathroom: { type: DataTypes.INTEGER },
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return ROOM;
};