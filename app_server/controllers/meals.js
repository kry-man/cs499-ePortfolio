// Initialize controller for meals and read the meals from the JSON files
var fs = require('fs');
var meals = JSON.parse(fs.readFileSync('./data/meals.json','utf8'));

const meals = (req, res) => {
     res.render('meals', { title: "Travlr Getaways", meals});
};

module.exports = {
    meals,
};