module.exports = (sequelize, DataTypes) => {
    const RESERVATION = sequelize.define('RESERVATION', {
        uid: { type: DataTypes.INTEGER },
        rid: { type: DataTypes.INTEGER },
        start_date: { type: DataTypes.STRING(6), allowNull: false },
        end_date: { type: DataTypes.STRING(6), allowNull: false },
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return RESERVATION;
};