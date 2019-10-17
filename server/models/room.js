module.exports = (sequelize, Sequelize) => {
    const { Op, DataTypes } = Sequelize;

    const ROOM = sequelize.define('ROOM', {
        uid: {
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
        thumbnail: {
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
        const { bed, bedroom, bathroom, guest, price_min, price_max, type } = options;
        if (bed) where.bed = ROOM.parseBed(bed);
        if (bedroom) where.bedroom = ROOM.parseBedRoom(bedroom);
        if (bathroom) where.bathroom = ROOM.parseBathRoom(bathroom);
        if (guest) where.guest = ROOM.parseGuest(guest);
        if (price_min && price_max) where.price = ROOM.parsePrice(price_min, price_max);
        if (type) where.type = ROOM.parseType(type);
        return where;
    };

    ROOM.parseBed = (bed) => {
        return {
            [Op.gte]: bed
        }
    };

    ROOM.parseBedRoom = (bedroom) => {
        return {
            [Op.gte]: bedroom
        }
    };

    ROOM.parseBathRoom = (bathroom) => {
        return {
            [Op.gte]: bathroom
        }
    };

    ROOM.parseGuest = (guest) => {
        return {
            [Op.gte]: guest
        }
    };

    ROOM.parsePrice = (price_min, price_max) => {
        return {
            [Op.between]: [price_min, price_max]
        }
    };

    ROOM.parseType = (type) => {
        return {
            [Op.like]: `%${type}%`
        }
    };

    return ROOM;
};