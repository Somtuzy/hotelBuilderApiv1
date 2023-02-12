const express = require("express");
const RoomType = require("../models/roomTypeSchema");
const app = require("../app/app")
const { MESSAGES } = require("../app/constants")
const create = require("../app/controller")

// create a roomtype
app.post("/rooms-types", async (req, res) => {
  try {
    const roomType = await create.addRoomType(req.body);
    res.status(200).send({message: MESSAGES.ROOM.CREATED, success: true, roomType})
  } catch (err) {
    res.status(500).send({message: err.message || MESSAGES.ERROR, success: false})
  }
});

// fetch all room types
app.get("/rooms-types", async (req, res) => {
    try {
        const roomtypes = await create.getRoomTypes()
        res.status(200)
        .send({message: MESSAGES.ROOMTYPE.FETCHED, success: true, data: roomtypes})
    } catch (err) {
        res.status(500).send({message: err.message || MESSAGES.ERROR, success: false})
    }
})