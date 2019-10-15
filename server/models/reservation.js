module.exports = (sequelize, DataTypes) => {
    const RESERVATION = sequelize.define('RESERVATION', {
        uid: { type: DataTypes.INTEGER, references: { model: 'USER', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE' },
        rid: { type: DataTypes.INTEGER, references: { model: 'ROOM', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE' },
        start_date: { type: DataTypes.STRING(6), allowNull: false },
        end_date: { type: DataTypes.STRING(6), allowNull: false },
    }, {
        timestamps: false,
        freezeTableName: true
    });

    RESERVATION.associate = (models) => {
        RESERVATION.hasMany(models.USER);
        RESERVATION.hasMany(models.ROOM);
    };

    return RESERVATION;
};