const mongoose = require('mongoose');

// Define the rooms schema
const roomsSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    room_rate: { type: String, required: true },
});

const Rooms = mongoose.model('lodgings', roomsSchema);
module.exports = Rooms;