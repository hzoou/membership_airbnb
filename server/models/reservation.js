module.exports = (sequelize, Sequelize) => {
    const { Op, DataTypes } = Sequelize;

    const RESERVATION = sequelize.define('RESERVATION', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        room_id: {
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
            attributes: ['room_id'],
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

    RESERVATION.reserveRoom = (user_id, room_id, checkin, checkout) => {
        return RESERVATION.create({
            user_id,
            room_id,
            checkin,
            checkout
        })
    };

    RESERVATION.cancelRoom = (user_id, room_id, checkin, checkout) => {
        return RESERVATION.destroy({
            where: {
                user_id,
                room_id,
                checkin,
                checkout
            }
        })
    };

    return RESERVATION;
};