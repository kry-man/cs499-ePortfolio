const mongoose = require('mongoose');
const Food = require('../models/meals'); //Register model
const Model = mongoose.model('foods');

// GET: /meals - lists all the meals
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsList = async(req, res) => {
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
    } else { // Return resulting meals list
        return res
            .status(200)
            .json(q);
    }

};
 

// GET: /meals - lists a single meal 
// Regardless of outcome, response must include HTMP status code
// and JSON message to the requesting client
const mealsByName = async(req, res) => {
    const q = await Model
    .find({ 'name' : req.params.mealName }) //Return single record
    .exec();

    // Uncomment the folllowing line to show results of query
    // on the console
    // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting meal
        return res
            .status(200)
            .json(q);
    }

};

// POST: /meals - Adds a new Meal
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsAddMeal = async(req, res) =>{
    const newMeal = new Meal({
        name: req.body.name,
        image: req.body.image,
        alt_name: req.body.alt_name,
        description: req.body.description
    });

    const q = await newMeal.save();

        if(!q)
        { // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return new meal
            return res
                .status(201)
                .json(q);
        }

        // Uncomment the folowing to show results of operation
        // on the console
        // console.log(q);
};

// PUT: /meals - Updates an existing Meal
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsEditMeal = async(req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            { 'name' : req.params.mealName },
            {
                name: req.body.name,
                image: req.body.image,
                alt_name: req.body.alt_name,
                description: req.body.description
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
    mealsList,
    mealsByName,
    mealsAddMeal,
    mealsEditMeal
};