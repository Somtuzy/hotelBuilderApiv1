const {model, Schema} = require("mongoose");
const ObjectId = Schema.Types.ObjectId
const RoomType = require("./roomTypeSchema")

// Define the Schema for the Room model
const RoomSchema = new Schema({
    _id: {
      type: String
    },
    name: {
      type: String,
      required: [true, 'Please specify the room name']
    },
    roomType: {
      type: String,
      ref: RoomType,
      required: [true, 'Please specify the room type']
    },
    price: {
      type: Number,
      required: [true, 'Please input room price']
    }
  });

  // Create the Room collection
const Room = model("Room", RoomSchema)

module.exports = Room;