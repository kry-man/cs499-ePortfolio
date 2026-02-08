//Bring in the DB connection and the Meals schema
const Mongoose = require('./db');
const Meal = require('./meals');

//Read seed data from json file
var fs = require('fs');
var foods = JSON.parse(fs.readFileSync('./data/foods.json','utf8'))

//Delete any existing records, then insert seed data
const seedDB = async () => {
    await Meal.deleteMany({});
    await Meal.insertMany(foods);
};

//Close the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});