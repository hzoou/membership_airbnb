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

    RESERVATION.reserveRoom = (uid, rid, checkin, checkout) => {
        return RESERVATION.create({
            uid,
            rid,
            checkin,
            checkout
        })
    };

    RESERVATION.cancelRoom = (uid, rid, checkin, checkout) => {
        return RESERVATION.destroy({
            where: {
                uid,
                rid,
                checkin,
                checkout
            }
        })
    };

    return RESERVATION;
};