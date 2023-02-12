const Room = require("../models/roomSchema")
const RoomType = require("../models/roomTypeSchema")

class Controller {
    async addRoom(room) {
        await Room.create(room)
    }

    async editRoom(id, data) {
        await Room.findByIdAndUpdate({_id: id}, data)
    }

    async deleteRoom(id) {
        await Room.findByIdAndDelete({_id: id})
    }

    async getRoom(id) {
        await Room.findById({_id: id})
    }

    async getRooms(rooms) {
        await Room.find(rooms)
    }

    async addRoomType(room) {
        await Room.create(room)
    }

    async getRoomTypes() {
        await RoomType.find({})
    }
}

module.exports = new Controller();