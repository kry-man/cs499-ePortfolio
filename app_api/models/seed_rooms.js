//Bring in the DB connection and the Rooms schema
const Mongoose = require('./db');
const Room = require('./rooms');

//Read seed data from json file
var fs = require('fs');
var lodgings = JSON.parse(fs.readFileSync('./data/lodgings.json','utf8'))

//Delete any existing records, then insert seed data
const seedDB = async () => {
    await Room.deleteMany({});
    await Room.insertMany(lodgings);
};

//Close the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});