module.exports = (sequelize, DataTypes) => {
    const USER = sequelize.define('USER', {
        googleId: {
            type: DataTypes.STRING(150),
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(80),
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });

    // controller 와 model 중에 잘 구별해서 넣자.
    USER.login = (user) => {
        return USER.findOrCreate({
            where: {googleId: user.sub, email: user.email, name: user.name, image: user.picture},
            raw: true
        });
    };

    return USER;
};