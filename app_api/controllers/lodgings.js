const mongoose = require('mongoose');
const Lodging = require('../models/rooms'); //Register model
const Model = mongoose.model('lodgings');

// GET: /rooms - lists all the rooms
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const roomsList = async(req, res) => {
    const q = await Model
    .find({}) //No filter, return all records
    .exec();

    // Uncomment the folllowing line to show results of query
    // on the console
    // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting rooms list
        return res
            .status(200)
            .json(q);
    }

};

// GET: /rooms - lists a room 
// Regardless of outcome, response must include HTMP status code
// and JSON message to the requesting client
const roomsByName = async(req, res) => {
    const q = await Model
    .find({ 'name' : req.params.roomName }) //Return single record
    .exec();

    // Uncomment the folllowing line to show results of query
    // on the console
    // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting room
        return res
            .status(200)
            .json(q);
    }

};

// POST: /rooms - Adds a new Room
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const roomsAddRoom = async(req, res) =>{
    const newRoom = new Room({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        room_rate: req.body.room_rate
    });

    const q = await newRoom.save();

        if(!q)
        { // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return new room
            return res
                .status(201)
                .json(q);
        }

        // Uncomment the folowing to show results of operation
        // on the console
        // console.log(q);
};

// PUT: /rooms - Updates an existing Room
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const roomsEditRoom = async(req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            { 'name' : req.params.roomName },
            {
                name: req.body.name,
                image: req.body.image,
                description: req.body.description,
                room_rate: req.body.room_rate
            }
        )
        .exec();

        if(!q)
        { // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return resulting updated trip
            return res
                .status(201)
                .json(q);
        }

        // Uncomment the following line to show results of
        operation
        // on the console
        // console.log(q);
};
 
module.exports = {
    roomsList,
    roomsByName,
    roomsAddRoom,
    roomsEditRoom
};