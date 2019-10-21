module.exports = (sequelize, Sequelize) => {
    const { Op, DataTypes } = Sequelize;

    const ROOM = sequelize.define('ROOM', {
        userId: {
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
        thumbnail: { // url 또는 base64
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

    // transaction
    // complex
    // 간단한 것은 그냥 놔두는 것이 좋을 수도 있음
    ROOM.getAllRooms = () => {
        return ROOM.findAll({
            raw: true
        });
    };

    ROOM.getRoomsByOption = async (options) => {
        const where = await ROOM.parseOptions(options);
        return ROOM.findAll({
            where,
            raw: true
        });
    };

    ROOM.parseOptions = async (options) => {
        const where = {};
        const { bed, bedroom, bathroom, guest, price_min, price_max, type, title, checkin, checkout } = options;
        if (bed) where.bed = ROOM.parseOption('gte', bed);
        if (bedroom) where.bedroom = ROOM.parseOption('gte', bedroom);
        if (bathroom) where.bathroom = ROOM.parseOption('gte', bathroom);
        if (guest) where.guest = ROOM.parseOption('gte', guest);
        if (price_min && price_max) where.price = ROOM.parseOption('between', [price_min, price_max]);
        if (type) where.type = ROOM.parseOption('like', `%${type}%`);
        if (title) where.title = ROOM.parseOption('like', `%${title}%`);
        if (checkin && checkout) where.id = await ROOM.parseOption('notIn', await ROOM.getReservedRoom(checkin, checkout));
        return where;
    };

    ROOM.parseOption = (condition, value) => {
        return {
            [Op[`${condition}`]]: value
        }
    };

    ROOM.getReservedRoom = async (checkin, checkout) => {
        const RESERVATION = require('../models').RESERVATION;
        const reservedRoomIds = Object.values(await RESERVATION.getReservedRoom(checkin, checkout)).reduce((acc, v) => [...acc, v.roomId], []);
        return reservedRoomIds;
    };

    return ROOM;
};