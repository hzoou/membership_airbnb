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
        start_date: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        end_date: {
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
                end_date: {
                    [Op.gt]: checkin
                },
                start_date: {
                    [Op.lt]: checkout
                }
            },
            raw: true
        })
    };

    return RESERVATION;
};