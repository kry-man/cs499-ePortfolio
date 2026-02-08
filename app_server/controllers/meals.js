// Initialize controller for food and read the meals from the JSON files
//var fs = require('fs');
//var foods = JSON.parse(fs.readFileSync('./data/foods.json','utf8'));

const mealsEndpoint = ' http://localhost:3000/api/meals'
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
};

const meals = async function (req, res, next) {
    // console. log('MEALS CONTROLLER BEGIN');
    await fetch(mealsEndpoint, options)
    .then((res) => res.json())
    .then((json) =>{
        let message = null;
        if (!(json instanceof Array)){
            message = "API lookup error";
            json = [];
        } else {
            if(!json.length){
                message = "No meals exist in our database!";
            }
        }
        res.render('meals', { title: "Travlr Getaways", foods: json, message});
    })
   .catch((err) => res.status(500).send(err.message)); 
};

module.exports = {
    meals,
};