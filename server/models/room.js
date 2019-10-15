module.exports = (sequelize, DataTypes) => {
    const ROOM = sequelize.define('ROOM', {
        uid: { type: DataTypes.INTEGER, references: { model: 'USER', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE' },
        name: { type: DataTypes.TEXT, allowNull: false},
        people: { type: DataTypes.INTEGER, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false },
        country: { type: DataTypes.STRING(100), allowNull: false },
        region: { type: DataTypes.STRING(100), allowNull: false },
        thumnail: { type: DataTypes.TEXT, allowNull: false },
        bed: { type: DataTypes.INTEGER, allowNull: false },
        bedroom: { type: DataTypes.INTEGER, allowNull: false },
        bathroom: { type: DataTypes.INTEGER, allowNull: false },
        type: { type: DataTypes.INTEGER, allowNull: false },
    }, {
        timestamps: false,
        freezeTableName: true
    });

    ROOM.associate = (models) => {
        ROOM.hasMany(models.USER,{ onDelete: 'CASCADE', onUpdate: 'CASCADE' });
        ROOM.belongsTo(models.RESERVATION);
    };

    return ROOM;
};