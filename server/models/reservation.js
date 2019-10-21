module.exports = (sequelize, Sequelize) => {
    const { Op, DataTypes } = Sequelize;

    const RESERVATION = sequelize.define('RESERVATION', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        roomId: {
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
            attributes: ['roomId'],
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

    RESERVATION.reserveRoom = (userId, roomId, checkin, checkout) => {
        return RESERVATION.create({
            userId,
            roomId,
            checkin,
            checkout
        })
    };

    RESERVATION.cancelRoom = (userId, roomId, checkin, checkout) => {
        return RESERVATION.destroy({
            where: {
                userId,
                roomId,
                checkin,
                checkout
            }
        })
    };

    return RESERVATION;
};