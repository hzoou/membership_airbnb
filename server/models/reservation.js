module.exports = (sequelize, Sequelize) => {
    const { Op, DataTypes } = Sequelize;

    const RESERVATION = sequelize.define('RESERVATION', {
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        checkin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        checkout: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    RESERVATION.getReservedRoom = (checkin, checkout) => {
        return RESERVATION.findAll({
            attributes: ['rid'],
            where: {
                checkout: {
                    [Op.gt]: checkin
                },
                checkin: {
                    [Op.lt]: checkout
                }
            },
            raw: true
        })
    };

    return RESERVATION;
};