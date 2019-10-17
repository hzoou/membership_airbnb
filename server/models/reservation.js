module.exports = (sequelize, DataTypes) => {
    const RESERVATION = sequelize.define('RESERVATION', {
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        start_date: {
            type: DataTypes.STRING(6),
            allowNull: false
        },
        end_date: {
            type: DataTypes.STRING(6),
            allowNull: false
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        allowNull: false,
    });

    return RESERVATION;
};