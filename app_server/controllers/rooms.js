// Initialize controller for rooms and read the rooms from the JSON files
var fs = require('fs');
var rooms = JSON.parse(fs.readFileSync('./data/rooms.json','utf8'));

const rooms = (req, res) => {
     res.render('rooms', { title: "Travlr Getaways", rooms});
};

module.exports = {
    rooms,
};