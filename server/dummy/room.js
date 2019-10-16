const rooms = require('./room-data');

const makeData = (rooms) => {
    return rooms.map((room) => {
        return {
            type: room.type,
            title: room.title,
            star: room.star,
            thumbnail: room.thumbnail,
            price: room.price,
            guest: room.guest,
            bedroom: room.bedroom,
            bed: room.bed,
            bathroom: room.bathroom
        }
    })
};

module.exports = makeData(rooms);